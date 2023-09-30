import Account from "./components/Account";
import HeroSection from "./components/HeroSection";
import Tips from "./components/Tips";
import Features from './components/Features/Features';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <Account />
      <Tips />
    </>
  );
}
