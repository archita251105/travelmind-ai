import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import Features from "../components/home/Features";
import Destinations from "../components/home/Destinations";
import HowItWorks from "../components/home/HowItWorks";

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <Destinations />
      <HowItWorks />
      <Footer />
    </>
  );
};

export default Home;