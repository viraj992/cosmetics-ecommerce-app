export default function PromoBanner() {
  return (
    <div className="w-full h-[300px] bg-[url('/banner.jpg')] bg-cover bg-center flex items-center justify-center">
      <div className="bg-white/80 p-10 rounded-xl text-center">
        <h2 className="text-3xl font-bold mb-4">
          Special Beauty Sale
        </h2>
        <p className="mb-6">Up to 30% off on selected items</p>
        <button className="px-6 py-3 bg-accent text-white rounded-lg">
          Shop Deals
        </button>
      </div>
    </div>
  );
}
