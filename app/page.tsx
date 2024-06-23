// pages/index.tsx
import { NextPage } from "next";
import {
  Navbar,
  Hero,
  BussinessSolutions,
  FAQ,
  Footer,
  Feedback,
} from "@/components/index";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center">
        <section className="w-full">
          <Hero />
          <Feedback />
          <BussinessSolutions />
          <FAQ />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
