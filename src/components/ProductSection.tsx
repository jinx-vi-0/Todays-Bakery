import { ProductCard } from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Custom Cakes',
    description: 'Beautiful custom-made cakes for all occasions',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80',
    price: 'From ₹350'
  },
  {
    id: 2,
    name: 'Pastry',
    description: 'Fresh Cake pastries',
    image: 'https://images.unsplash.com/photo-1685957652870-d56b0e5bea52?auto=format&fit=crop&q=80',
    price: 'From ₹20'
  },
  {
    id: 3,
    name: 'Cold Beverages',
    description: 'Refreshing beverages and sodas',
    image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?auto=format&fit=crop&q=80',
    price: 'From ₹30'
  },
  {
    id: 4,
    name: 'Ice Creams',
    description: 'Variety of flavors and sundaes',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80',
    price: 'From ₹40'
  },
  {
    id: 5,
    name: 'Fresh Lassi',
    description: 'Savory lassi',
    image: 'https://images.unsplash.com/photo-1690369642707-3d30e6f7fdcb?auto=format&fit=crop&q=80',
    price: 'From ₹50'
  },
  {
    id: 6,
    name: 'Fresh Paneer',
    description: 'Fresh paneer daily',
    image: 'https://t4.ftcdn.net/jpg/06/32/64/95/360_F_632649552_4Gi6jOlnbDllG1qyjKo53lzdFDJNDfhq.jpg',
    price: '₹320/kg'
  },
  {
    id: 7,
    name: 'Indian Sweets',
    description: 'Traditional sweets and mithai',
    image: 'https://images.unsplash.com/photo-1699708263762-00ca477760bd?auto=format&fit=crop&q=80',
    price: 'From ₹400/kg'
  },
  {
    id: 8,
    name: 'Party Supplies',
    description: 'Decorations, candles, and more',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80',
    price: 'Varies'
  },
  {
    id: 9,
    name: 'Fresh Cookies',
    description: 'Cookies in various flavors',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80',
    price: 'Varies'
  },
  {
    id: 10,
    name: 'Hot Snacks',
    description: 'Samosa, Litti, and other savory treats',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80',
    price: 'From ₹15'
  }
];

export function ProductSection() {
  return (
    <section id="products" className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}