import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Sections/Hero";
import Portfolio from "../components/Sections/Portfolio";
import Story from "../components/Sections/Story";
import Contact from "../components/Sections/Contact";
import Gallery from "../components/Sections/Gallery";

const Home: NextPage = (projects) => {
  return (
    <div>
      <Head>
        <title>Gareth Hind | Web Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/favicon_io/favicon.ico" />
      </Head>

      <Hero />
      <Gallery />
      <Story />
      <Contact />
    </div>
  );
};

export default Home;
