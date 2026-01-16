import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Stethoscope, GraduationCap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="py-20 bg-muted/50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <div className="aspect-[4/3] bg-gradient-primary flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-card/20 flex items-center justify-center mx-auto mb-4">
                    <Stethoscope className="w-12 h-12 text-card" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-card mb-2">
                    Santushti Hospital
                  </h3>
                  <p className="text-card/80">Established 2004</p>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-card rounded-xl p-4 shadow-elevated"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Near BHU</p>
                  <p className="text-sm text-muted-foreground">Varanasi, UP</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-primary-lighter text-primary rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Santushti Hospital
            </h2>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Santushti Hospital is a premier multi-super speciality healthcare institution located near BHU in Varanasi, Uttar Pradesh. For over two decades, we have been providing exceptional medical care with a focus on urology and kidney-related treatments.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our hospital combines cutting-edge medical technology with compassionate care, making advanced healthcare accessible to patients from tier-2 and tier-3 cities. Beyond healthcare, we are also committed to medical education through our network of nursing and paramedical colleges.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-lighter flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Urology & Kidney</h4>
                  <p className="text-sm text-muted-foreground">Specialized care</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Education Ecosystem</h4>
                  <p className="text-sm text-muted-foreground">4+ Institutions</p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-primary"
              asChild
            >
              <a href="#services">
                Explore Our Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
