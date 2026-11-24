import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Products from "./components/Products";
import Gallery from "./components/Gallery";
import CTA from "./components/CTA";
import OrderForm from "./components/OrderForm";
import Footer from "./components/Footer";
import { CartProvider } from "./providers/CartProvider";

export default function Home() {
  return (
    <CartProvider>
      <div className="roast-ledger min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Products />
          <Features />
          <Gallery />
          <CTA />
          <OrderForm />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
