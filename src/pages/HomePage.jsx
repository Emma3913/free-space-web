import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import Register from "../components/Register";

function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Footer />
    </div>
  );
}

export default HomePage;
