'use client'

import { useState } from 'react'

export default function MaintenancePage() {
  const [showRequestModal, setShowRequestModal] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'Low'
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Maintenance request submitted:', formData)
    setShowRequestModal(false)
    setShowSuccessModal(true)
    setFormData({ title: '', description: '', priority: 'Low' })
  }

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Maintenance Center</h1>
          <p className="text-sm text-[var(--color-text)]">Report Issues And Track Progress</p>
        </div>
        <button 
          onClick={() => setShowRequestModal(true)}
          className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 shadow-lg"
        >
          Maintenance Request
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Maintenance"
            className="w-full max-w-md px-4 py-2 bg-[var(--color-mbx)] border border-gray-200/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <svg className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Previous Maintenance History */}
      <div>
        <h2 className="text-lg font-medium mb-4">Previous maintenance history</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Maintenance Card 1 - In Progress + Priority High */}
          <div className="bg-[var(--color-mbx)] rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Faucet Leaking</h3>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">R</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Assigned To Rahima</p>
                <p className="text-xs text-[var(--color-text)]">Contractor</p>
              </div>
            </div>

            <div className="flex gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">In Progress</span>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium">Priority High</span>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-gray-400 rounded-full mt-1"></div>
                <div className="flex-1">
                  <p className="text-[var(--color-text)]">Assigned</p>
                  <p className="text-xs text-[var(--color-text)]">Mar 24, 09:15 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-gray-300 rounded-full mt-1"></div>
                <div className="flex-1">
                  <p className="text-[var(--color-text)]">Estimated Complete Date</p>
                  <p className="text-xs text-[var(--color-text)]">Mar 26, 09:15 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Maintenance Card 2 - Completed */}
          <div className="bg-[var(--color-mbx)] rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Faucet Leaking</h3>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">R</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Assigned To Rahima</p>
                <p className="text-xs text-[var(--color-text)]">Contractor</p>
              </div>
            </div>

            <div className="flex gap-2 mb-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">Completed</span>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-1"></div>
                <div className="flex-1">
                  <p className="text-[var(--color-text)]">Assigned</p>
                  <p className="text-xs text-[var(--color-text)]">Mar 24, 09:15 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-1"></div>
                <div className="flex-1">
                  <p className="text-[var(--color-text)]">Completed</p>
                  <p className="text-xs text-[var(--color-text)]">Mar 26, 09:15 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Maintenance Card 3 - In Progress + Priority Low */}
          <div className="bg-[var(--color-mbx)] rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Faucet Leaking</h3>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">R</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Assigned To Rahima</p>
                <p className="text-xs text-[var(--color-text)]">Contractor</p>
              </div>
            </div>

            <div className="flex gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">In Progress</span>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">Priority Low</span>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-gray-400 rounded-full mt-1"></div>
                <div className="flex-1">
                  <p className="text-[var(--color-text)]">Assigned</p>
                  <p className="text-xs text-[var(--color-text)]">Mar 24, 09:15 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-gray-300 rounded-full mt-1"></div>
                <div className="flex-1">
                  <p className="text-[var(--color-text)]">Estimated Complete Date</p>
                  <p className="text-xs text-[var(--color-text)]">Mar 26, 09:15 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Maintenance Request Modal */}
      {showRequestModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[var(--color-mbx)] rounded-2xl p-6 w-full max-w-md mx-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Maintenance Request Form</h2>
              <button
                onClick={() => setShowRequestModal(false)}
                className="text-[var(--color-text)] hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Tell Us Your Problem?"
                  className="w-full px-4 py-3 bg-[var(--color-bg)] rounded-xl border border-gray-200/20 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-[var(--color-text)]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe Your Problem?"
                  rows={4}
                  className="w-full px-4 py-3 bg-[var(--color-bg)] rounded-xl border border-gray-200/20 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-[var(--color-text)] resize-none"
                  required
                />
              </div>

              <div className="flex items-center gap-3 py-2">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                  <span className="text-purple-500 text-sm font-medium">Attach Photo And Video</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Priority</label>
                <div className="relative">
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[var(--color-bg)] rounded-xl border border-gray-200/20 focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none cursor-pointer"
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="Emergency">Emergency</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-[var(--color-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-lg mt-6"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[var(--color-mbx)] rounded-2xl p-8 w-full max-w-sm mx-4 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold mb-2">Maintenance Request Sent Successfully</h2>
            </div>

            <button
              onClick={() => setShowSuccessModal(false)}
              className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg"
            >
              Go To Home
            </button>
          </div>
        </div>
      )}
    </>
  )
}