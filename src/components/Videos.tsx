import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, ArrowRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const videos = [
  {
    title: 'Understanding Blood Cancer',
    doctor: 'Dr. Sunjay Garg',
    thumbnail: null,
    duration: '12:45',
  },
  {
    title: 'Nephrotic Syndrome Explained',
    doctor: 'Dr. Sunjay Garg',
    thumbnail: null,
    duration: '15:30',
  },
  {
    title: 'Overcoming Depression',
    doctor: 'Dr. Ritu Garg',
    thumbnail: null,
    duration: '18:20',
  },
];

export const Videos = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="videos" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-lighter text-primary rounded-full text-sm font-medium mb-4">
            Health Education
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Health Education Videos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn about various health conditions and treatments from our expert doctors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 border border-border">
                {/* Video Thumbnail */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-primary group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-7 h-7 text-primary-foreground ml-1" />
                    </div>
                  </div>
                  
                  {/* Duration badge */}
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-foreground/80 rounded text-xs text-card font-medium">
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-5">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-6 h-6 rounded-full bg-primary-lighter flex items-center justify-center">
                      <User className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm">{video.doctor}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Watch More Free Videos
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
