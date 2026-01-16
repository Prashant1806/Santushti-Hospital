import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Calendar, Award, Heart, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-hospital.jpg';

const heroSlides = [
  {
    title: 'Welcome to Santushti Hospital',
    subtitle: 'Best hospital for urology and kidney-related problems',
    image: heroImage,
  },
  {
    title: 'Advanced Urology Care',
    subtitle: 'State-of-the-art treatment with experienced specialists',
    image: heroImage,
  },
  {
    title: 'Compassionate Healthcare',
    subtitle: 'Holistic care for you and your family',
    image: heroImage,
  },
];

const highlights = [
  { icon: Award, text: '20+ Years of Experience' },
  { icon: Heart, text: 'Holistic Care & Cure' },
  { icon: Shield, text: 'Affordable, Advanced Healthcare' },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={heroSlides[currentSlide].image}
            alt="Santushti Hospital"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container mx-auto relative z-10 py-20">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm text-primary-foreground rounded-full text-sm font-medium mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                🏥 Multi Super Speciality Hospital
              </motion.span>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-4 leading-tight">
                {heroSlides[currentSlide].title}
              </h1>

              <p className="text-lg md:text-xl text-card/90 mb-8">
                {heroSlides[currentSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Highlights */}
          <motion.div
            className="flex flex-wrap gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-card/10 backdrop-blur-sm rounded-full text-card"
              >
                <item.icon className="w-5 h-5 text-secondary-light" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-lg"
              asChild
            >
              <a href="#appointment">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-card/10 backdrop-blur-sm border-card/30 text-card hover:bg-card/20 font-semibold px-8 py-6 text-lg"
              asChild
            >
              <a href="tel:+919839058489">
                <Phone className="w-5 h-5 mr-2" />
                Emergency Call
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-card/20 backdrop-blur-sm text-card hover:bg-card/30 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-accent w-8'
                  : 'bg-card/40 hover:bg-card/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-card/20 backdrop-blur-sm text-card hover:bg-card/30 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
