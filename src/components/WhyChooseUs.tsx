import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Building2, MapPin, Plane } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Compassionate & Affordable Care',
    description: 'We believe quality healthcare should be accessible to everyone. Our compassionate team provides world-class treatment at affordable prices.',
  },
  {
    icon: Building2,
    title: 'Multi-Super Speciality Hospital',
    description: 'From urology to general surgery, our comprehensive range of specialities ensures you receive complete care under one roof.',
  },
  {
    icon: MapPin,
    title: 'Serving Tier-2 & Tier-3 Cities',
    description: 'Bringing advanced healthcare to communities that need it most. Quality medical care is no longer limited to metro cities.',
  },
  {
    icon: Plane,
    title: 'No Need to Travel to Metro Cities',
    description: 'Get the same quality of care you\'d expect in metropolitan hospitals, right here in Varanasi. Save time, money, and stress.',
  },
];

export const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-lighter text-primary rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Makes Us Different
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            At Santushti Hospital, we combine expertise, compassion, and affordability to deliver exceptional healthcare experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 h-full shadow-card hover:shadow-elevated transition-all duration-300 border border-border hover:border-primary/20">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
