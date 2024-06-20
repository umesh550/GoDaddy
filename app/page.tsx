// pages/index.tsx
import { NextPage } from "next";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import BussinessSolutions from "@/components/BussinessSolutions";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center">
        <section className="w-full">
          <Hero />
          <BussinessSolutions />
          <FAQ />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
