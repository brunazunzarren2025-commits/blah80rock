import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Members from '@/components/sections/Members';
import Schedule from '@/components/sections/Schedule';
import Music from '@/components/sections/Music';
import Gallery from '@/components/sections/Gallery';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Members />
        <Schedule />
        <Music />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
