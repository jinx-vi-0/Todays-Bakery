import { Cake, Menu } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-amber-50 shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Cake className="h-8 w-8 text-amber-600" />
            <span className="ml-2 text-xl font-semibold text-amber-900">Today's Bakery</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-amber-900 hover:text-amber-600">Home</a>
            <a href="#products" className="text-amber-900 hover:text-amber-600">Products</a>
            <a href="#custom-orders" className="text-amber-900 hover:text-amber-600">Custom Orders</a>
            <a href="#contact" className="text-amber-900 hover:text-amber-600">Contact</a>
          </div>
          
          <div className="md:hidden">
            <button className="text-amber-900">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}