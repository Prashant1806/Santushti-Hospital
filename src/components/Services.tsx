import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Droplets, 
  Heart, 
  Scissors, 
  ShieldPlus, 
  Baby, 
  Stethoscope, 
  Activity,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Droplets,
    title: 'Urology',
    description: 'Comprehensive urological care including prostate, bladder, and urinary tract treatments.',
    color: 'primary',
  },
  {
    icon: Heart,
    title: 'Kidney Care',
    description: 'Advanced kidney disease management, dialysis support, and transplant consultation.',
    color: 'secondary',
  },
  {
    icon: Scissors,
    title: 'Laparoscopy',
    description: 'Minimally invasive surgery for appendix, gall bladder, and other conditions.',
    color: 'primary',
  },
  {
    icon: ShieldPlus,
    title: 'Hernia Surgery',
    description: 'Expert treatment for groin and abdominal hernias with modern techniques.',
    color: 'secondary',
  },
  {
    icon: Baby,
    title: "Women's Health",
    description: 'Dedicated care for women including gynecological and maternal health services.',
    color: 'primary',
  },
  {
    icon: Stethoscope,
    title: 'General Surgery',
    description: 'Wide range of surgical procedures performed by experienced surgeons.',
    color: 'secondary',
  },
  {
    icon: Activity,
    title: 'ICU & Critical Care',
    description: '24/7 intensive care unit with advanced life support and monitoring.',
    color: 'primary',
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" ref={ref} className="py-20 bg-muted/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-lighter text-primary rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Specialized Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of medical services, with special expertise in urology and kidney care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="bg-card rounded-2xl p-6 h-full shadow-card hover:shadow-elevated transition-all duration-300 border border-border hover:border-primary/20 hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-xl ${service.color === 'primary' ? 'bg-gradient-primary' : 'bg-gradient-success'} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href="#appointment">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
