export function Hero() {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1607482369189-a53b6e71fa48?auto=format&fit=crop&q=80")'
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to Today's Bakery</h1>
            <p className="text-xl mb-8">Crafting moments of joy with every bite</p>
            <a href="#contact" className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition inline-block">
              Contact Us to Order
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
