export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-slate-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg"></div>
              <span className="text-white font-semibold text-xl">TUF-on</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-slate-300 hover:text-white transition">Blog</a>
              <a href="#" className="text-slate-300 hover:text-white transition">Laboratory</a>
              <a href="#" className="text-slate-300 hover:text-white transition">Theory</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800 border border-slate-700 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
            <span className="text-sm text-slate-300">Scientific Project in Development</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            TUF <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Universe</span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Exploring the limits of conventional physics through the Universal Flow Theory. 
            A scientific journey in real-time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:opacity-90 transition">
              Access Scientific Registry
            </button>
            <button className="px-8 py-4 border border-slate-600 text-slate-300 rounded-lg font-semibold hover:bg-slate-800 transition">
              Explore Laboratory
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
