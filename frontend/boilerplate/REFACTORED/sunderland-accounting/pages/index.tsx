import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Section/Hero.tsx";
import About from "../components/Section/About.tsx";
import Services from "../components/Section/Services.tsx";
import Contact from "../components/Section/Contact.tsx";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sunderland Accounting</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="/public/favicon/favicon.ico" />
      </Head>

      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
