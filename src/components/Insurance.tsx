import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, CreditCard, CheckCircle } from 'lucide-react';

export const Insurance = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 bg-secondary/10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-3xl p-8 md:p-12 shadow-elevated border border-secondary/20 relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-success flex items-center justify-center shadow-lg">
                <Shield className="w-10 h-10 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Insurance & Ayushman Card
                </h3>
                <p className="text-muted-foreground">
                  We accept all major insurance plans & Ayushman Bharat Card
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-primary-lighter rounded-full">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Cashless Treatment</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full">
                <CreditCard className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium text-secondary">All Major Insurers</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
