"use client"
import React from "react";

export default function PaymentPage() {
  const handlePayment = () => {
    alert("✅ Payment Initiated via QR Code!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-3xl p-8 space-y-8">
        {/* Payment Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Company Payment</h1>
          <p className="text-gray-500 mt-2">Scan & Pay to complete your purchase</p>
        </div>

        {/* Payment Body */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* QR Scanner Section */}
          <div className="flex flex-col items-center justify-center">
            <div className="bg-gray-200 p-4 rounded-xl shadow-md">
              {/* QR Code Scanner Image */}
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=company@upi&pn=Company%20Name"
                alt="QR Code"
                className="w-48 h-48 object-cover"
              />
            </div>
            <p className="mt-4 text-gray-600 text-sm text-center">
              Scan the QR using any UPI App (PhonePe, Google Pay, Paytm)
            </p>
          </div>

          {/* Payment Summary */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md space-y-4">
            <h2 className="font-semibold text-lg text-gray-700">Payment Summary</h2>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Company</span>
              <span>Talent Marketplace Pvt Ltd</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Service</span>
              <span>Subscription - Pro Plan</span>
            </div>
            <div className="flex justify-between font-bold text-gray-800 text-lg mt-6">
              <span>Total Amount</span>
              <span>$299</span>
            </div>

            <button
              onClick={handlePayment}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
            >
              ✅ Mark Payment Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
