"use client";

import { useState } from 'react';

export default function PaymentsPage() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Bank');

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Make A Payment</h1>
          <p className="text-sm text-[var(--color-text)]">Quick And Secure Payments.</p>
        </div>
        <button 
          onClick={() => setIsPaymentModalOpen(true)}
          className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 shadow-lg"
        >
          Pay Rent Now
        </button>
      </div>

      {/* Next Payment Amount */}
      <div className="bg-[var(--color-mbx)] rounded-2xl p-6 shadow-sm mb-6">
        <div className="text-4xl font-bold mb-2">$950</div>
        <p className="text-[var(--color-text)]">Next Payment</p>
      </div>

      {/* Payment History Table */}
      <div className="bg-[var(--color-mbx)] rounded-2xl p-6 shadow-sm">
        <h2 className="text-lg font-medium mb-4">Payment History</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200/10">
                <th className="text-left py-3 px-4">Month</th>
                <th className="text-left py-3 px-4">Date</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Amount</th>
                <th className="text-left py-3 px-4">Transaction ID</th>
                <th className="text-left py-3 px-4">Payment Method</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200/5">
                <td className="py-3 px-4">January</td>
                <td className="py-3 px-4">Feb 05, 2025</td>
                <td className="py-3 px-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Paid</span></td>
                <td className="py-3 px-4">$948.55</td>
                <td className="py-3 px-4 text-[var(--color-text)]">B557a67b-4833-44ac-9...</td>
                <td className="py-3 px-4">Bank</td>
              </tr>
              <tr className="border-b border-gray-200/5">
                <td className="py-3 px-4">February</td>
                <td className="py-3 px-4">Mar 09, 2025</td>
                <td className="py-3 px-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Paid</span></td>
                <td className="py-3 px-4">$202.87</td>
                <td className="py-3 px-4 text-[var(--color-text)]">1027743d-24dd-44f9-B0...</td>
                <td className="py-3 px-4">Bank</td>
              </tr>
              <tr className="border-b border-gray-200/5">
                <td className="py-3 px-4">March</td>
                <td className="py-3 px-4">Apr 07, 2025</td>
                <td className="py-3 px-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Paid</span></td>
                <td className="py-3 px-4">$406.27</td>
                <td className="py-3 px-4 text-[var(--color-text)]">6704e610-0548-4ebd-9...</td>
                <td className="py-3 px-4">Bank</td>
              </tr>
              <tr className="border-b border-gray-200/5">
                <td className="py-3 px-4">April</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
              </tr>
              <tr className="border-b border-gray-200/5">
                <td className="py-3 px-4">May</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
              </tr>
              <tr className="border-b border-gray-200/5">
                <td className="py-3 px-4">Jun</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
              </tr>
              <tr className="border-b border-gray-200/5">
                <td className="py-3 px-4">July</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
              </tr>
              <tr className="border-b border-gray-200/5">
                <td className="py-3 px-4">August</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
              </tr>
              <tr className="border-b border-gray-200/5">
                <td className="py-3 px-4">September</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
              </tr>
              <tr className="border-b border-gray-200/5">
                <td className="py-3 px-4">October</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
              </tr>
              <tr className="border-b border-gray-200/5">
                <td className="py-3 px-4">November</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
              </tr>
              <tr>
                <td className="py-3 px-4">December</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-[var(--color-mbx)] rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Make A Payment</h2>
              <button 
                onClick={() => setIsPaymentModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            {/* Tenant Information */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">CH</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Courtney Henry</h3>
                <div className="flex items-center gap-2 text-sm text-[var(--color-text)]">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>23B, Maplewood Apartments</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--color-text)]">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>+1 917 555 2938</span>
                </div>
              </div>
            </div>

            {/* Payment Breakdown */}
            <div className="bg-[var(--color-bg)] rounded-xl p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm">House Rent January</span>
                <span className="font-semibold">$1800</span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm">Vat</span>
                <span className="font-semibold">$50</span>
              </div>
              <div className="border-t border-gray-200/20 pt-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Total Due:</span>
                  <span className="font-bold text-lg">$1850</span>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mb-6">
              <p className="text-sm mb-4">Please Complete Payment Using One Of The Methods Below.</p>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                <button
                  onClick={() => setSelectedPaymentMethod('Stripe')}
                  className={`p-3 rounded-xl border-2 transition-all ${
                    selectedPaymentMethod === 'Stripe' 
                      ? 'border-purple-500 bg-purple-50' 
                      : 'border-gray-200/20 bg-[var(--color-bg)]'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      selectedPaymentMethod === 'Stripe' 
                        ? 'border-purple-500 bg-purple-500' 
                        : 'border-gray-300'
                    }`}>
                      {selectedPaymentMethod === 'Stripe' && (
                        <div className="w-full h-full rounded-full bg-white scale-50"></div>
                      )}
                    </div>
                    <span className="text-sm font-medium">Stripe</span>
                  </div>
                </button>

                <button
                  onClick={() => setSelectedPaymentMethod('Bank')}
                  className={`p-3 rounded-xl border-2 transition-all ${
                    selectedPaymentMethod === 'Bank' 
                      ? 'border-purple-500 bg-purple-50' 
                      : 'border-gray-200/20 bg-[var(--color-bg)]'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      selectedPaymentMethod === 'Bank' 
                        ? 'border-purple-500 bg-purple-500' 
                        : 'border-gray-300'
                    }`}>
                      {selectedPaymentMethod === 'Bank' && (
                        <div className="w-full h-full rounded-full bg-white scale-50"></div>
                      )}
                    </div>
                    <span className="text-sm font-medium">Bank</span>
                  </div>
                </button>

                <button
                  onClick={() => setSelectedPaymentMethod('Zelle')}
                  className={`p-3 rounded-xl border-2 transition-all ${
                    selectedPaymentMethod === 'Zelle' 
                      ? 'border-purple-500 bg-purple-50' 
                      : 'border-gray-200/20 bg-[var(--color-bg)]'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      selectedPaymentMethod === 'Zelle' 
                        ? 'border-purple-500 bg-purple-500' 
                        : 'border-gray-300'
                    }`}>
                      {selectedPaymentMethod === 'Zelle' && (
                        <div className="w-full h-full rounded-full bg-white scale-50"></div>
                      )}
                    </div>
                    <span className="text-sm font-medium">Zelle</span>
                  </div>
                </button>

                <button
                  onClick={() => setSelectedPaymentMethod('Cash App')}
                  className={`p-3 rounded-xl border-2 transition-all ${
                    selectedPaymentMethod === 'Cash App' 
                      ? 'border-purple-500 bg-purple-50' 
                      : 'border-gray-200/20 bg-[var(--color-bg)]'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      selectedPaymentMethod === 'Cash App' 
                        ? 'border-purple-500 bg-purple-500' 
                        : 'border-gray-300'
                    }`}>
                      {selectedPaymentMethod === 'Cash App' && (
                        <div className="w-full h-full rounded-full bg-white scale-50"></div>
                      )}
                    </div>
                    <span className="text-sm font-medium">Cash App</span>
                  </div>
                </button>
              </div>

              <button
                onClick={() => setSelectedPaymentMethod('Venmo')}
                className={`w-full p-3 rounded-xl border-2 transition-all ${
                  selectedPaymentMethod === 'Venmo' 
                    ? 'border-purple-500 bg-purple-50' 
                    : 'border-gray-200/20 bg-[var(--color-bg)]'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    selectedPaymentMethod === 'Venmo' 
                      ? 'border-purple-500 bg-purple-500' 
                      : 'border-gray-300'
                  }`}>
                    {selectedPaymentMethod === 'Venmo' && (
                      <div className="w-full h-full rounded-full bg-white scale-50"></div>
                    )}
                  </div>
                  <span className="text-sm font-medium">Venmo</span>
                </div>
              </button>
            </div>

            {/* Pay Now Button */}
            <button 
              onClick={() => {
                // Handle payment processing here
                setIsPaymentModalOpen(false);
                setIsSuccessModalOpen(true);
              }}
              className="w-full bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-lg mb-4"
            >
              Pay Now
            </button>

            {/* Offline Payment Option */}
            <div className="text-center mb-4">
              <p className="text-sm text-[var(--color-text)] mb-2">Already Paid In Offline? Submit A Payment Proof.</p>
              <p className="text-xs text-[var(--color-text)] mb-3">It Can Be A Screenshot Or A Payment Receipt.</p>
              
              <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-2 mx-auto">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
                Attach Payment Proof
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-[var(--color-mbx)] rounded-2xl p-8 w-full max-w-sm text-center">
            {/* Success Icon */}
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            {/* Success Message */}
            <h2 className="text-2xl font-bold mb-4">Thanks!</h2>
            <p className="text-[var(--color-text)] mb-6 leading-relaxed">
              Thanks! We've Noted Your Payment. You'll Get A Text Once It's Verified.
            </p>

            {/* View Payment History Button */}
            <button 
              onClick={() => {
                setIsSuccessModalOpen(false);
                // Optionally scroll to payment history table
              }}
              className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg"
            >
              View Payment History
            </button>
          </div>
        </div>
      )}
    </>
  )
}