import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Product from "@/components/Product";
import Trust from "@/components/Trust";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trust />
      <Product />
      <Footer />
    </>
  );
}