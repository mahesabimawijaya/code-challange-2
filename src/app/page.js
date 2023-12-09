import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import Review from "@/components/Review";
import Trust from "@/components/Trust";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trust />
      <Product />
      <Review />
      <Footer />
    </>
  );
}
