import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductSection } from './components/ProductSection';
import { CustomOrders } from './components/CustomOrders';
import { Contact } from './components/Contact';

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <ProductSection />
        <CustomOrders />
        <Contact />
      </main>
      <footer className="bg-amber-900 text-amber-50 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; {currentYear} Today's Bakery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}


export default App;