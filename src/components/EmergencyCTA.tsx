import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, MessageCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const EmergencyCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 bg-gradient-emergency relative overflow-hidden">
      {/* Animated pulse background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-card/5 rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-card/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-card/20 backdrop-blur-sm mb-6">
            <AlertCircle className="w-8 h-8 text-card animate-pulse" />
          </div>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-card mb-4">
            Emergency? Get In Touch With Our Experts Now!
          </h2>
          <p className="text-card/90 text-lg mb-8 max-w-2xl mx-auto">
            Our emergency department is available 24×7 with experienced doctors and modern facilities.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-card text-emergency hover:bg-card/90 font-semibold px-8 py-6 text-lg shadow-lg"
              asChild
            >
              <a href="tel:+919839058489">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-card text-card hover:bg-card/20 font-semibold px-8 py-6 text-lg"
              asChild
            >
              <a href="https://wa.me/919839058489" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
