import { Calendar, Clock, Gift } from 'lucide-react';

export function CustomOrders() {
  return (
    <section id="custom-orders" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">Custom Orders</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Calendar className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Book in Advance</h3>
            <p className="text-gray-600">Place your order at least 24 hours in advance for custom cakes</p>
          </div>
          <div className="text-center p-6">
            <Gift className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Personalization</h3>
            <p className="text-gray-600">Choose from various designs, flavors, and decorations</p>
          </div>
          <div className="text-center p-6">
            <Clock className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">On-time Delivery</h3>
            <p className="text-gray-600">Guaranteed delivery at your preferred time</p>
          </div>
        </div>
      </div>
    </section>
  );
}