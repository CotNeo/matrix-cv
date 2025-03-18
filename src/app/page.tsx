import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import GitHubStatus from "../components/GitHubStatus";
import Certificates from "../components/Certificates";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <GitHubStatus />
      <Certificates />
      <Footer />
    </main>
  );
}
