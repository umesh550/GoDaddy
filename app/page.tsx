// pages/index.tsx
import { NextPage } from "next";
import {
  Navbar,
  Hero,
  BussinessSolutions,
  Guide,
  FAQ,
  Footer,
  Feedback,
} from "@/components/index";
import Bussiness from "@/components/Bussiness";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center">
        <section className="w-full">
          <Hero />
          <Bussiness />
          <Feedback />
          <BussinessSolutions />
          <Guide />
          <FAQ />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
