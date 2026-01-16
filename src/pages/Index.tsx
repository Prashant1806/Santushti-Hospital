import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { About } from '@/components/About';
import { Doctors } from '@/components/Doctors';
import { Services } from '@/components/Services';
import { Insurance } from '@/components/Insurance';
import { Videos } from '@/components/Videos';
import { Blog } from '@/components/Blog';
import { Appointment } from '@/components/Appointment';
import { Location } from '@/components/Location';
import { EmergencyCTA } from '@/components/EmergencyCTA';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Stats />
        <WhyChooseUs />
        <About />
        <Doctors />
        <Services />
        <Insurance />
        <Videos />
        <Blog />
        <Appointment />
        <Location />
        <EmergencyCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
