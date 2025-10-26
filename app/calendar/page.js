"use client";

import { useState } from 'react';

export default function CalendarPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Viewing Requests</h1>
          <p className="text-sm text-[var(--color-text)]">Manage All Scheduled Property Visits From Potential Tenants.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-4 py-2 rounded-full font-medium transition-all duration-200 shadow-lg"
        >
          Send Viewing Request
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search By Property Name Or Requester Name."
            className="w-full max-w-lg px-4 py-3 bg-[var(--color-mbx)] border border-gray-200/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <svg className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Table Header */}
      <div className="bg-[var(--color-mbx)] rounded-t-2xl p-4 mb-2">
        <div className="grid grid-cols-12 gap-4 text-sm font-medium text-[var(--color-text)]">
          <div className="col-span-4">Property</div>
          <div className="col-span-3">Date & Time</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-3">Actions</div>
        </div>
      </div>

      {/* Viewing Requests List */}
      <div className="space-y-3">
        {/* Request 1 - Pending */}
        <div className="bg-[var(--color-mbx)] rounded-2xl p-4 shadow-sm">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-4 flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Downtown Apartment</h3>
                <p className="text-sm text-[var(--color-text)]">6391 Elgin St, Celina, Delaware 10299</p>
              </div>
            </div>
            <div className="col-span-3">
              <p className="text-sm">Oct 18, 2025 - 3:30 PM</p>
            </div>
            <div className="col-span-2">
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">Pending</span>
            </div>
            <div className="col-span-3 flex gap-2">
              <button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-4 py-2 rounded-full text-xs font-medium transition-all duration-200">
                Edit
              </button>
              <button className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white px-4 py-2 rounded-full text-xs font-medium transition-all duration-200">
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* Request 2 - Approved */}
        <div className="bg-[var(--color-mbx)] rounded-2xl p-4 shadow-sm">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-4 flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-200">
                <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold">Downtown Apartment</h3>
                <p className="text-sm text-[var(--color-text)]">4140 Parker Rd, Allentown, New Mexico 31134</p>
              </div>
            </div>
            <div className="col-span-3">
              <p className="text-sm">December 29, 2012 - 3:30 PM</p>
            </div>
            <div className="col-span-2">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">Approved</span>
            </div>
            <div className="col-span-3 flex gap-2">
              <button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-4 py-2 rounded-full text-xs font-medium transition-all duration-200">
                Edit
              </button>
              <button className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white px-4 py-2 rounded-full text-xs font-medium transition-all duration-200">
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* Request 3 - Cancelled */}
        <div className="bg-[var(--color-mbx)] rounded-2xl p-4 shadow-sm">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-4 flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-200">
                <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold">Downtown Apartment</h3>
                <p className="text-sm text-[var(--color-text)]">2972 Westheimer Rd, Santa Ana, Illinois 85486</p>
              </div>
            </div>
            <div className="col-span-3">
              <p className="text-sm">October 31, 2017 - 3:30 PM</p>
            </div>
            <div className="col-span-2">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium">Cancelled</span>
            </div>
            <div className="col-span-3 flex gap-2">
              <button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-4 py-2 rounded-full text-xs font-medium transition-all duration-200">
                Edit
              </button>
              <button className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white px-4 py-2 rounded-full text-xs font-medium transition-all duration-200">
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* Request 4 - Confirmed */}
        <div className="bg-[var(--color-mbx)] rounded-2xl p-4 shadow-sm">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-4 flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-200">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold">Downtown Apartment</h3>
                <p className="text-sm text-[var(--color-text)]">4517 Washington Ave, Kentucky 39495</p>
              </div>
            </div>
            <div className="col-span-3">
              <p className="text-sm">August 7, 2017 - 3:30 PM</p>
            </div>
            <div className="col-span-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">Confirmed</span>
            </div>
            <div className="col-span-3 flex gap-2">
              <button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-4 py-2 rounded-full text-xs font-medium transition-all duration-200">
                Edit
              </button>
              <button className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white px-4 py-2 rounded-full text-xs font-medium transition-all duration-200">
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* Request 5 - Cancelled */}
        <div className="bg-[var(--color-mbx)] rounded-2xl p-4 shadow-sm">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-4 flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-200">
                <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-semibold">Downtown Apartment</h3>
                <p className="text-sm text-[var(--color-text)]">2972 Westheimer Rd, Santa Ana, Illinois 85486</p>
              </div>
            </div>
            <div className="col-span-3">
              <p className="text-sm">October 31, 2017 - 3:30 PM</p>
            </div>
            <div className="col-span-2">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium">Cancelled</span>
            </div>
            <div className="col-span-3 flex gap-2">
              <button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-4 py-2 rounded-full text-xs font-medium transition-all duration-200">
                Edit
              </button>
              <button className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white px-4 py-2 rounded-full text-xs font-medium transition-all duration-200">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Summary */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[var(--color-mbx)] rounded-2xl p-6 shadow-sm">
          <h3 className="text-sm font-medium text-[var(--color-text)] mb-2">Total Requests</h3>
          <p className="text-2xl font-bold">5</p>
          <p className="text-xs text-blue-500 mt-1">This month</p>
        </div>
        
        <div className="bg-[var(--color-mbx)] rounded-2xl p-6 shadow-sm">
          <h3 className="text-sm font-medium text-[var(--color-text)] mb-2">Pending</h3>
          <p className="text-2xl font-bold">1</p>
          <p className="text-xs text-yellow-500 mt-1">Awaiting response</p>
        </div>
        
        <div className="bg-[var(--color-mbx)] rounded-2xl p-6 shadow-sm">
          <h3 className="text-sm font-medium text-[var(--color-text)] mb-2">Approved</h3>
          <p className="text-2xl font-bold">2</p>
          <p className="text-xs text-green-500 mt-1">Confirmed visits</p>
        </div>
        
        <div className="bg-[var(--color-mbx)] rounded-2xl p-6 shadow-sm">
          <h3 className="text-sm font-medium text-[var(--color-text)] mb-2">Cancelled</h3>
          <p className="text-2xl font-bold">2</p>
          <p className="text-xs text-red-500 mt-1">This month</p>
        </div>
      </div>

      {/* Viewing Request Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-[var(--color-mbx)] rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Viewing Requests</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            <form className="space-y-4">
              {/* Property Selection */}
              <div>
                <label className="block text-sm font-medium mb-2">Property</label>
                <select className="w-full px-4 py-3 bg-[var(--color-bg)] border border-gray-200/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option value="">Select A Property</option>
                  <option value="downtown-apt-1">Downtown Apartment - 6391 Elgin St</option>
                  <option value="downtown-apt-2">Downtown Apartment - 4140 Parker Rd</option>
                  <option value="downtown-apt-3">Downtown Apartment - 2972 Westheimer Rd</option>
                  <option value="downtown-apt-4">Downtown Apartment - 4517 Washington Ave</option>
                </select>
              </div>

              {/* Full Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-[var(--color-bg)] border border-gray-200/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="Ohiri.Doe@Gmail.Com"
                    className="w-full px-4 py-3 bg-[var(--color-bg)] border border-gray-200/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              {/* Phone Number and Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+1"
                    className="w-full px-4 py-3 bg-[var(--color-bg)] border border-gray-200/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Select Date</label>
                  <input 
                    type="date" 
                    defaultValue="2025-10-20"
                    className="w-full px-4 py-3 bg-[var(--color-bg)] border border-gray-200/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              {/* Time Selection and Number of Guests */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Select Time</label>
                  <div className="flex gap-2">
                    <select className="flex-1 px-4 py-3 bg-[var(--color-bg)] border border-gray-200/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500">
                      <option value="01">01</option>
                      <option value="02" selected>02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </select>
                    <select className="flex-1 px-4 py-3 bg-[var(--color-bg)] border border-gray-200/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500">
                      <option value="00">00</option>
                      <option value="15">15</option>
                      <option value="30" selected>30</option>
                      <option value="45">45</option>
                    </select>
                    <select className="flex-1 px-4 py-3 bg-[var(--color-bg)] border border-gray-200/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500">
                      <option value="AM">AM</option>
                      <option value="PM" selected>PM</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Number Of Guests</label>
                  <input 
                    type="number" 
                    placeholder="2"
                    min="1"
                    max="10"
                    className="w-full px-4 py-3 bg-[var(--color-bg)] border border-gray-200/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea 
                  rows="4"
                  placeholder="Would like To Check Parking Availability."
                  className="w-full px-4 py-3 bg-[var(--color-bg)] border border-gray-200/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                ></textarea>
              </div>

              {/* Checkbox Agreement */}
              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="agreement"
                  className="mt-1 rounded"
                />
                <label htmlFor="agreement" className="text-sm text-[var(--color-text)]">
                  I Agree To Be Contacted By The Property Manager Regarding This Viewing.
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 shadow-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    // Handle form submission here
                    setIsModalOpen(false);
                  }}
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}