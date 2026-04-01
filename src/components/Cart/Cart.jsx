import React from 'react';

const Cart = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black text-gray-900 mb-10 tracking-tight">Shopping Bag</h1>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* --- Items List --- */}
          <div className="flex-grow space-y-6">
            {[1, 2].map((item) => (
              <div key={item} className="group relative flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-3xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <div className="h-32 w-32 bg-gray-100 rounded-2xl overflow-hidden flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop" 
                    alt="product" 
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="flex-grow flex flex-col justify-between h-full text-center sm:text-left">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold text-gray-800">Nike Air Max Pulse</h3>
                      <p className="text-lg font-semibold text-gray-900">$160.00</p>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Men's Shoes • Phantom/White</p>
                  </div>

                  <div className="flex items-center justify-center sm:justify-start gap-6 mt-6">
                    <div className="flex items-center border border-gray-200 rounded-full px-4 py-1 gap-4">
                      <button className="text-gray-400 hover:text-black font-medium">—</button>
                      <span className="text-sm font-bold w-4 text-center">1</span>
                      <button className="text-gray-400 hover:text-black font-medium">+</button>
                    </div>
                    <button className="text-xs font-bold uppercase tracking-widest text-red-500 hover:text-red-600 transition-colors">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* --- Checkout Sidebar --- */}
          <div className="w-full lg:w-[380px]">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-50 sticky top-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Summary</h2>
              
              <div className="space-y-4 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-bold text-gray-900">$320.00</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Estimated Shipping & Handling</span>
                  <span className="font-bold text-gray-900">$15.00</span>
                </div>
                <div className="flex justify-between text-gray-600 border-b border-gray-100 pb-4">
                  <span>Estimated Tax</span>
                  <span className="font-bold text-gray-900">—</span>
                </div>
                <div className="flex justify-between items-center pt-2 py-6">
                  <span className="text-base font-bold">Total</span>
                  <span className="text-2xl font-black text-indigo-600">$335.00</span>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-black text-white py-5 rounded-full font-bold text-sm hover:bg-gray-800 transition-all active:scale-[0.98]">
                  Checkout
                </button>
                <button className="w-full bg-gray-100 text-gray-900 py-5 rounded-full font-bold text-sm hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
                  <span className="opacity-60">Pay with</span> 
                  <span className="font-black italic">PayPal</span>
                </button>
              </div>

              <div className="mt-8">
                <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                  By clicking checkout, you agree to our Terms of Service and Privacy Policy. 
                  Prices include VAT where applicable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;