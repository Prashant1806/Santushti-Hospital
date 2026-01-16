import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

export const Location = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="location" ref={ref} className="py-20 bg-muted/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary-lighter text-primary rounded-full text-sm font-medium mb-4">
            Find Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Best Hospital Near BHU In Varanasi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conveniently located in Nevada, Sundarpur, we are easily accessible from all parts of Varanasi.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-elevated"
        >
          {/* Map Container */}
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.8973961954457!2d82.99045731500853!3d25.267023683868636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e33e8ff5bb5e5%3A0x7f6f7f7f7f7f7f7f!2sSundarpur%2C%20Varanasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="Santushti Hospital Location"
            />
            
            {/* Overlay Info Card */}
            <div className="absolute bottom-6 left-6 bg-card rounded-xl p-5 shadow-elevated max-w-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-1">
                    Santushti Hospital
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Nevada, Sundarpur, Varanasi, Uttar Pradesh
                  </p>
                  <a
                    href="https://maps.google.com/?q=Sundarpur,Varanasi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
