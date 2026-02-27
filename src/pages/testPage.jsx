import Loader from "../components/loader";



export default function TestPage(){
   

    return (
    <div className="min-h-screen bg-[#fff9f9]">
      {/* Hero Banner */}
      <div className="h-screen w-full flex justify-center items-center">
        {/*  left side  */}
        <div className="w-[50%] bg-secondary min-h-screen flex flex-col items-start p-[100px] gap-10">
          <span className="text-white text-xl font-bold">TODAY'S BEST DEAL</span>
          <span className="text-white text-5xl font-bold">Most Essential Skin Care Products</span>
          <span className="text-white text-md font-light">Discover authentic beauty essentials crafted to nourish, protect, and enhance your natural glow.</span>
        </div>
        <div className="w-[49%] bg-pink-200 h-full"></div>
      </div>
      

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">How It Works</h2>
          
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Create Shop */}
          <div className="text-center">
            <div className="w-20 h-20 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Browse Products</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Receive Email Notifications for new orders & manage all orders in vendor 
              dashboard, replicating the support of a personal assistant, simplifying your workload.
            </p>
          </div>

          {/* Add Products */}
          <div className="text-center">
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Add to Cart</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Receive Email Notifications for new orders & manage all orders in vendor 
              dashboard, replicating the support of a personal assistant, simplifying your workload.
            </p>
          </div>

          {/* Get Orders */}
          <div className="text-center">
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Place Order</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Receive Email Notifications for new orders & manage all orders in vendor 
              dashboard, replicating the support of a personal assistant, simplifying your workload.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-pink-800 rounded-3xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-white mb-2">100+</div>
              <div className="text-white text-lg">Customers</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">100+</div>
              <div className="text-white text-lg">Stores</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">75+</div>
              <div className="text-white text-lg">Reviews</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">10+</div>
              <div className="text-white text-lg">Experience</div>
            </div>
          </div>
        </div>

       

      {/* WhatsApp Floating Button */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition">
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </button>
    </div>

    </div>
  );
}