import { BrowserRouter } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import NavBar from "./components/navbar/Navbar";
import Developers from "./pages/Developers";
import Footer from "./pages/Footer";
import Features from "./pages/Features";
import Hero from "./pages/Hero";
import Join from "./pages/Join";
import Loading from "./pages/Header";
import Partners from "./pages/Partners";
import Properties from "./pages/Properties";
import Subscribe from "./pages/Subscribe";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Hero />
        <Loading />
        <Partners />
        <Properties />
        <AboutUs />
        <Features />
        <Developers />
        <Join />
        <Testimonials />
        <Subscribe />
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
