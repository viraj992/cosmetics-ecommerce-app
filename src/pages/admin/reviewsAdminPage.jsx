import axios from "axios";
import { useEffect, useState } from "react";
import { BiTrash, BiCheck, BiX, BiStar, BiSearch, BiFilter } from "react-icons/bi";
import Loader from "../../components/loader";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function ReviewsAdminPage() {
	const [reviews, setReviews] = useState([]);
	const [loading, setLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState("");
	const [filterStatus, setFilterStatus] = useState("all");

	const [popupVisible, setPopupVisible] = useState(false);
	const [clickedReview, setClickedReview] = useState(null);
	const [isApproved, setIsApproved] = useState("no");

	const navigate = useNavigate();

	useEffect(() => {
		if (loading) {
			axios
				.get(import.meta.env.VITE_BACKEND_URL + "/api/reviews", {
					headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
				})
				.then((res) => {
					setReviews(res.data);
					setLoading(false);
				})
				.catch((err) => {
					console.error("Error loading reviews:", err);
					setLoading(false);
				});
		}
	}, [loading]);

	const filteredReviews = reviews.filter((review) => {
		const matchesSearch = review.reviewerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
			review.comment.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesFilter = filterStatus === "all" || 
			(filterStatus === "approved" && review.isApproved) ||
			(filterStatus === "pending" && !review.isApproved);
		return matchesSearch && matchesFilter;
	});

	const renderStars = (rating) => {
		return Array.from({ length: 5 }, (_, i) => (
			<BiStar
				key={i}
				size={20}
				className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
				style={{ display: 'inline-block' }}
			/>
		));
	};

	return (
		<div className="w-full max-w-7xl mx-auto px-6 py-8">
			{/* Header Section */}
			<div className="mb-8">
				<h1 className="text-3xl font-bold text-gray-800 mb-2">Reviews Management</h1>
				<p className="text-gray-600">Manage and moderate customer reviews</p>
			</div>

			{/* Stats Cards */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
				<div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-blue-100 text-sm font-medium mb-1">Total Reviews</p>
							<p className="text-3xl font-bold">{reviews.length}</p>
						</div>
						<div className="bg-white bg-opacity-20 rounded-full p-3">
							<BiStar size={24} />
							
						</div>
					</div>
				</div>

				<div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-green-100 text-sm font-medium mb-1">Approved</p>
							<p className="text-3xl font-bold">{reviews.filter(r => r.isApproved).length}</p>
						</div>
						<div className="bg-white bg-opacity-20 rounded-full p-3">
							<BiCheck size={24} />
						</div>
					</div>
				</div>

				<div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-lg">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-orange-100 text-sm font-medium mb-1">Pending</p>
							<p className="text-3xl font-bold">{reviews.filter(r => !r.isApproved).length}</p>
						</div>
						<div className="bg-white bg-opacity-20 rounded-full p-3">
							<BiFilter size={24} />
						</div>
					</div>
				</div>
			</div>

			{/* Search and Filter Bar */}
			<div className="bg-white rounded-xl shadow-md p-6 mb-6">
				<div className="flex flex-col md:flex-row gap-4">
					<div className="flex-1 relative">
						<BiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
						<input
							type="text"
							placeholder="Search by reviewer name or comment..."
							className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
					</div>
					<div className="flex gap-2">
						<button
							onClick={() => setFilterStatus("all")}
							className={`px-6 py-3 rounded-lg font-medium transition-all ${
								filterStatus === "all"
									? "bg-blue-500 text-white shadow-md"
									: "bg-gray-100 text-gray-700 hover:bg-gray-200"
							}`}
						>
							All
						</button>
						<button
							onClick={() => setFilterStatus("approved")}
							className={`px-6 py-3 rounded-lg font-medium transition-all ${
								filterStatus === "approved"
									? "bg-green-500 text-white shadow-md"
									: "bg-gray-100 text-gray-700 hover:bg-gray-200"
							}`}
						>
							Approved
						</button>
						<button
							onClick={() => setFilterStatus("pending")}
							className={`px-6 py-3 rounded-lg font-medium transition-all ${
								filterStatus === "pending"
									? "bg-orange-500 text-white shadow-md"
									: "bg-gray-100 text-gray-700 hover:bg-gray-200"
							}`}
						>
							Pending
						</button>
					</div>
				</div>
			</div>

			{/* Reviews Table/Cards */}
			{loading ? (
				<div className="flex justify-center items-center h-64">
					<Loader />
				</div>
			) : (
				<div className="bg-white rounded-xl shadow-md overflow-hidden">
					{filteredReviews.length === 0 ? (
						<div className="text-center py-16">
							<BiSearch size={64} className="text-gray-300 mx-auto mb-4" />
							<p className="text-gray-500 text-lg">No reviews found</p>
						</div>
					) : (
						<div className="overflow-x-auto">
							<table className="w-full">
								<thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
									<tr>
										<th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
											Reviewer
										</th>
										<th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
											Rating
										</th>
										<th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
											Comment
										</th>
										<th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
											Status
										</th>
										<th className="px-6 py-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
											Actions
										</th>
									</tr>
								</thead>

								<tbody className="divide-y divide-gray-200">
									{filteredReviews.map((review) => (
										<tr
											key={review._id}
											className="hover:bg-blue-50 transition-colors cursor-pointer group"
											onClick={() => {
												setClickedReview(review);
												setIsApproved(review.isApproved ? "yes" : "no");
												setPopupVisible(true);
											}}
										>
											<td className="px-6 py-4">
												<div className="flex items-center">
													<div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
														{review.reviewerName.charAt(0).toUpperCase()}
													</div>
													<span className="font-medium text-gray-900">{review.reviewerName}</span>
												</div>
											</td>
											<td className="px-6 py-4">
												<div className="flex items-center gap-1">
													{renderStars(review.rating)}
													<span className="ml-2 text-sm font-semibold text-gray-700">
														{review.rating}.0
													</span>
												</div>
											</td>
											<td className="px-6 py-4">
												<p className="text-gray-700 line-clamp-2 max-w-md">
													{review.comment}
												</p>
											</td>
											<td className="px-6 py-4">
												{review.isApproved ? (
													<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
														<BiCheck size={16} className="mr-1" />
														Approved
													</span>
												) : (
													<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
														<BiFilter size={16} className="mr-1" />
														Pending
													</span>
												)}
											</td>
											<td
												className="px-6 py-4 text-center"
												onClick={(e) => e.stopPropagation()}
											>
												<button
													className="inline-flex items-center justify-center w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full transition-all transform hover:scale-110 shadow-md hover:shadow-lg"
													onClick={() => {
														const token = localStorage.getItem("token");
														if (!token) {
															navigate("/login");
															return;
														}
														if (window.confirm("Are you sure you want to delete this review?")) {
															axios
																.delete(import.meta.env.VITE_BACKEND_URL + "/api/reviews/" + review._id, {
																	headers: { Authorization: `Bearer ${token}` },
																})
																.then(() => {
																	toast.success("Review deleted successfully");
																	setLoading(true);
																})
																.catch((error) => {
																	console.error("Error deleting Review:", error);
																	toast.error("Failed to delete Review");
																});
														}
													}}
												>
													<BiTrash size={18} />
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					)}
				</div>
			)}

			{/* Enhanced POPUP - Reduced Height */}
			{popupVisible && clickedReview && (
				<div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-4 animate-fadeIn">
					<div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl relative transform transition-all animate-slideUp max-h-[85vh] overflow-y-auto">
						{/* Header - More Compact */}
						<div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-2xl p-4 text-white">
							<h2 className="text-xl font-bold">Review Details</h2>
							<p className="text-blue-100 text-xs mt-1">Review and manage approval status</p>
						</div>

						{/* Close Button */}
						<button
							className="absolute top-3 right-3 w-8 h-8 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full transition-all flex items-center justify-center"
							onClick={() => setPopupVisible(false)}
						>
							<BiX size={20} />
						</button>

						{/* Content - More Compact */}
						<div className="p-4 space-y-4">
							{/* Reviewer Info */}
							<div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
								<div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
									{clickedReview.reviewerName.charAt(0).toUpperCase()}
								</div>
								<div>
									<p className="text-xs text-gray-500 font-medium">Reviewer</p>
									<p className="text-lg font-bold text-gray-900">{clickedReview.reviewerName}</p>
								</div>
							</div>

							{/* Rating */}
							<div className="p-3 bg-gray-50 rounded-xl">
								<p className="text-xs text-gray-500 font-medium mb-2">Rating</p>
								<div className="flex items-center gap-2">
									{renderStars(clickedReview.rating)}
									<span className="ml-2 text-xl font-bold text-gray-900">
										{clickedReview.rating}.0
									</span>
								</div>
							</div>

							{/* Comment */}
							<div className="p-3 bg-gray-50 rounded-xl">
								<p className="text-xs text-gray-500 font-medium mb-2">Comment</p>
								<p className="text-gray-900 leading-relaxed text-sm">{clickedReview.comment}</p>
							</div>

							{/* Approval Status */}
							<div className="p-3 bg-gray-50 rounded-xl">
								<p className="text-xs text-gray-500 font-medium mb-2">Approval Status</p>
								<div className="flex gap-3">
									<button
										onClick={() => setIsApproved("yes")}
										className={`flex-1 py-2 px-3 rounded-lg font-medium transition-all text-sm ${
											isApproved === "yes"
												? "bg-green-500 text-white shadow-lg scale-105"
												: "bg-white border-2 border-gray-200 text-gray-700 hover:border-green-500"
										}`}
									>
										<BiCheck size={18} className="inline mr-1" />
										Approved
									</button>
									<button
										onClick={() => setIsApproved("no")}
										className={`flex-1 py-2 px-3 rounded-lg font-medium transition-all text-sm ${
											isApproved === "no"
												? "bg-orange-500 text-white shadow-lg scale-105"
												: "bg-white border-2 border-gray-200 text-gray-700 hover:border-orange-500"
										}`}
									>
										<BiFilter size={18} className="inline mr-1" />
										Pending
									</button>
								</div>
							</div>
						</div>

						{/* Footer Actions - More Compact */}
						<div className="p-4 bg-gray-50 rounded-b-2xl flex gap-3">
							<button
								className="flex-1 py-2 px-4 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors text-sm"
								onClick={() => setPopupVisible(false)}
							>
								Cancel
							</button>
							{(isApproved === "yes") !== clickedReview.isApproved && (
								<button
									className="flex-1 py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl text-sm"
									onClick={async () => {
										setPopupVisible(false);
										try {
											await axios.put(
												import.meta.env.VITE_BACKEND_URL + "/api/reviews/" + clickedReview._id,
												{ isApproved: isApproved === "yes" },
												{
													headers: {
														Authorization: `Bearer ${localStorage.getItem("token")}`,
													},
												}
											);
											toast.success("Review updated successfully");
											setLoading(true);
										} catch (err) {
											console.error(err);
											toast.error("Failed to update review");
										}
									}}
								>
									<BiCheck size={18} className="inline mr-1" />
									Save Changes
								</button>
							)}
						</div>
					</div>
				</div>
			)}

			<style>{`
				@keyframes fadeIn {
					from { opacity: 0; }
					to { opacity: 1; }
				}
				@keyframes slideUp {
					from { transform: translateY(20px); opacity: 0; }
					to { transform: translateY(0); opacity: 1; }
				}
				.animate-fadeIn {
					animation: fadeIn 0.2s ease-out;
				}
				.animate-slideUp {
					animation: slideUp 0.3s ease-out;
				}
				.line-clamp-2 {
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					overflow: hidden;
				}
			`}</style>
		</div>
	);
}