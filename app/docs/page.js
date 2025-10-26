export default function DocsPage() {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Lease & Documents</h1>
          <p className="text-sm text-[var(--color-text)]">Here's All Your Important Documents.</p>
        </div>
        <button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-4 py-2 rounded-full font-medium transition-all duration-200 shadow-lg">
          Upload Document
        </button>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex items-center gap-4 mb-6">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="rounded" />
          <span className="text-sm">Select All</span>
        </label>
        
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search File"
            className="w-full px-4 py-2 bg-[var(--color-mbx)] border border-gray-200/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <svg className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Current Lease Agreement Section */}
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-4">Current Lease Agreement</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* PDF Document 1 */}
          <div className="bg-[var(--color-mbx)] rounded-xl p-4 shadow-sm relative">
            <div className="flex justify-between items-start mb-3">
              <input type="checkbox" className="rounded" />
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>
            
            <div className="flex flex-col items-center mb-3">
              <div className="w-16 h-20 bg-red-500 rounded-lg flex items-center justify-center mb-2">
                <span className="text-white font-bold text-xs">PDF</span>
              </div>
              <h3 className="text-sm font-medium text-center">Lease Agreement (202...</h3>
            </div>
            
            <div className="flex justify-between text-xs text-[var(--color-text)]">
              <span>12 Kb</span>
              <span>12.07.2025</span>
            </div>
          </div>

          {/* PDF Document 2 */}
          <div className="bg-[var(--color-mbx)] rounded-xl p-4 shadow-sm relative">
            <div className="flex justify-between items-start mb-3">
              <input type="checkbox" className="rounded" />
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>
            
            <div className="flex flex-col items-center mb-3">
              <div className="w-16 h-20 bg-red-500 rounded-lg flex items-center justify-center mb-2">
                <span className="text-white font-bold text-xs">PDF</span>
              </div>
              <h3 className="text-sm font-medium text-center">Renewal Offer</h3>
            </div>
            
            <div className="flex justify-between text-xs text-[var(--color-text)]">
              <span>12 Kb</span>
              <span>12.07.2025</span>
            </div>
          </div>

          {/* PDF Document 3 */}
          <div className="bg-[var(--color-mbx)] rounded-xl p-4 shadow-sm relative">
            <div className="flex justify-between items-start mb-3">
              <input type="checkbox" className="rounded" />
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>
            
            <div className="flex flex-col items-center mb-3">
              <div className="w-16 h-20 bg-red-500 rounded-lg flex items-center justify-center mb-2">
                <span className="text-white font-bold text-xs">PDF</span>
              </div>
              <h3 className="text-sm font-medium text-center">Addendum - Pet Policy</h3>
            </div>
            
            <div className="flex justify-between text-xs text-[var(--color-text)]">
              <span>12 Kb</span>
              <span>12.07.2025</span>
            </div>
          </div>

          {/* PDF Document 4 */}
          <div className="bg-[var(--color-mbx)] rounded-xl p-4 shadow-sm relative">
            <div className="flex justify-between items-start mb-3">
              <input type="checkbox" className="rounded" />
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>
            
            <div className="flex flex-col items-center mb-3">
              <div className="w-16 h-20 bg-red-500 rounded-lg flex items-center justify-center mb-2">
                <span className="text-white font-bold text-xs">PDF</span>
              </div>
              <h3 className="text-sm font-medium text-center">Utility Bill Policy</h3>
            </div>
            
            <div className="flex justify-between text-xs text-[var(--color-text)]">
              <span>12 Kb</span>
              <span>12.07.2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* ID or Uploaded Proofs Section */}
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-4">ID or Uploaded Proofs</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Image Document 1 */}
          <div className="bg-[var(--color-mbx)] rounded-xl p-4 shadow-sm relative">
            <div className="flex justify-between items-start mb-3">
              <input type="checkbox" className="rounded" />
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>
            
            <div className="flex flex-col items-center mb-3">
              <div className="w-16 h-20 bg-green-500 rounded-lg flex items-center justify-center mb-2">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-sm font-medium text-center">National ID</h3>
            </div>
            
            <div className="flex justify-between text-xs text-[var(--color-text)]">
              <span>12 Kb</span>
              <span>12.07.2025</span>
            </div>
          </div>

          {/* Image Document 2 */}
          <div className="bg-[var(--color-mbx)] rounded-xl p-4 shadow-sm relative">
            <div className="flex justify-between items-start mb-3">
              <input type="checkbox" className="rounded" />
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>
            
            <div className="flex flex-col items-center mb-3">
              <div className="w-16 h-20 bg-green-500 rounded-lg flex items-center justify-center mb-2">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-sm font-medium text-center">Driving License</h3>
            </div>
            
            <div className="flex justify-between text-xs text-[var(--color-text)]">
              <span>12 Kb</span>
              <span>12.07.2025</span>
            </div>
          </div>

          {/* Image Document 3 */}
          <div className="bg-[var(--color-mbx)] rounded-xl p-4 shadow-sm relative">
            <div className="flex justify-between items-start mb-3">
              <input type="checkbox" className="rounded" />
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>
            
            <div className="flex flex-col items-center mb-3">
              <div className="w-16 h-20 bg-green-500 rounded-lg flex items-center justify-center mb-2">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-sm font-medium text-center">Passport Image</h3>
            </div>
            
            <div className="flex justify-between text-xs text-[var(--color-text)]">
              <span>12 Kb</span>
              <span>12.07.2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Document Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[var(--color-mbx)] rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-medium mb-4">Document Actions</h2>
          <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white p-3 rounded-full font-medium transition-all duration-200 shadow-lg text-left">
              Upload New Document
            </button>
            <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white p-3 rounded-full font-medium transition-all duration-200 shadow-lg text-left">
              Download Selected
            </button>
            <button className="w-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white p-3 rounded-full font-medium transition-all duration-200 shadow-lg text-left">
              Create Document Package
            </button>
            <button className="w-full bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white p-3 rounded-full font-medium transition-all duration-200 shadow-lg text-left">
              Delete Selected
            </button>
          </div>
        </div>

        <div className="bg-[var(--color-mbx)] rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-medium mb-4">Document Statistics</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-[var(--color-text)]">Total Documents</span>
              <span className="font-semibold">7 files</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-[var(--color-text)]">PDF Documents</span>
              <span className="font-semibold">4 files</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-[var(--color-text)]">Image Files</span>
              <span className="font-semibold">3 files</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-[var(--color-text)]">Total Size</span>
              <span className="font-semibold">84 KB</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-gray-200/10">
              <span className="text-sm text-[var(--color-text)]">Last Updated</span>
              <span className="font-semibold">12.07.2025</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}