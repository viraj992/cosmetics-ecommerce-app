import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function AddReviewPage() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredStar, setHoveredStar] = useState(0);
  const navigate = useNavigate();

  function handleStarClick(value) {
    setRating(value);
  }

  useEffect(() => {
    if (loading) {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/reviews")
        .then((res) => {
          setReviews(res.data);
          setLoading(false);
        })
        .catch(() => {
          toast.error("Failed to load reviews");
          setLoading(false);
        });
    }
  }, [loading]);

  function handleSubmit() {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login");
    if (rating === 0) return toast.error("Please select a rating");
    if (comment.trim().length < 3) return toast.error("Comment is too short");

    const data = { rating, comment };
    axios
      .post(import.meta.env.VITE_BACKEND_URL + "/api/reviews", data, {
        headers: { Authorization: "Bearer " + token },
      })
      .then(() => {
        toast.success("Review submitted");
        setComment("");
        setRating(0);
        setLoading(true);
      })
      .catch(() => toast.error("Failed to submit review"));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* FORM SECTION */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 transform transition-all duration-300 hover:shadow-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-[#E91E63] to-[#880E4F] rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Share Your Experience
            </h2>
          </div>

          {/* Rating Section */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Your Rating
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  onClick={() => handleStarClick(value)}
                  onMouseEnter={() => setHoveredStar(value)}
                  onMouseLeave={() => setHoveredStar(0)}
                  className="group transition-all duration-200 transform hover:scale-110 focus:outline-none"
                >
                  <span
                    className={`text-5xl transition-all duration-200 ${
                      value <= (hoveredStar || rating)
                        ? "text-yellow-400 drop-shadow-lg"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                </button>
              ))}
            </div>
            {rating > 0 && (
              <p className="mt-2 text-sm text-gray-600 animate-fade-in">
                You rated: <span className="font-semibold text-blue-600">{rating} out of 5 stars</span>
              </p>
            )}
          </div>

          {/* Comment Section */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Your Review
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full border-2 border-gray-200 rounded-2xl h-32 px-4 py-3 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 resize-none"
              placeholder="Tell us about your experience..."
            />
            <div className="mt-2 flex justify-between items-center text-xs text-gray-500">
              <span>{comment.length} characters</span>
              <span>Minimum 3 characters required</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/"
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 text-center"
            >
              Cancel
            </Link>
            <button
              onClick={handleSubmit}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-[#E91E63] to-[#880E4F] text-white rounded-xl font-semibold hover:from-[#880E4F] hover:to-[#E91E63] transform transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Submit Review
            </button>
          </div>
        </div>

        {/* REVIEWS SLIDER SECTION */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Customer Reviews
            </h2>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-600 font-medium">Loading reviews...</p>
            </div>
          ) : reviews.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-gray-500">
              <svg className="w-20 h-20 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <p className="text-xl font-semibold">No reviews yet</p>
              <p className="text-sm mt-2">Be the first to share your experience!</p>
            </div>
          ) : (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-12"
            >
              {reviews.map((r) => (
                <SwiperSlide key={r._id}>
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 h-full border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {r.reviewerName.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800">
                            {r.reviewerName}
                          </h3>
                          <p className="text-xs text-gray-500">
                            {new Date(r.createdAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-2xl ${
                            i < r.rating ? "text-yellow-400" : "text-gray-300"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    {/* Comment */}
                    <p className="text-gray-700 leading-relaxed line-clamp-4">
                      "{r.comment}"
                    </p>

                    {/* Bottom decoration */}
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2 text-blue-600">
                        
                       
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
}