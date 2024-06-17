import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
export default function Home() {
  return (
    <main className="">
      <Navbar />
      <section className="">
        <Hero />
        <FAQ />
      </section>
      <Footer />
    </main>
  );
}
