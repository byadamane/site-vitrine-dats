import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Impact } from './components/Impact';
import { Participate } from './components/Participate';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Impact />
        <Participate />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
