import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Facebook, Instagram, Youtube, Mail, User } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Sunjay Garg',
    qualification: 'MBBS, MS, DNB, MCh (Urology), MNAMS',
    specialty: 'Urology & Kidney Care',
    image: null,
  },
  {
    name: 'Dr. Ritu Garg',
    qualification: 'MBBS, MD (Pathology)',
    specialty: 'Pathology & Diagnostics',
    image: null,
  },
  {
    name: 'Dr. Pranjal Garg',
    qualification: 'MBBS',
    specialty: 'General Medicine',
    image: null,
  },
  {
    name: 'Dr. Priyansh Garg',
    qualification: 'MBBS, MS (BHU)',
    specialty: 'Surgery',
    image: null,
  },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Mail, href: 'mailto:santushti.hospital@gmail.com', label: 'Email' },
];

export const Doctors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="doctors" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-lighter text-primary rounded-full text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Your Specialists
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our experienced team of doctors brings decades of expertise in providing compassionate, world-class healthcare.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 border border-border">
                {/* Doctor Image Placeholder */}
                <div className="aspect-[3/4] bg-gradient-to-b from-primary-lighter to-muted relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-12 h-12 text-primary" />
                    </div>
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          className="w-10 h-10 rounded-full bg-card/20 backdrop-blur-sm flex items-center justify-center text-card hover:bg-card/40 transition-colors"
                          aria-label={social.label}
                        >
                          <social.icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="p-5 text-center">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-2">
                    {doctor.specialty}
                  </p>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {doctor.qualification}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
