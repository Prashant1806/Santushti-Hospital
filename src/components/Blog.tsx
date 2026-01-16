import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    title: 'Understanding Kidney Health: A Complete Guide',
    excerpt: 'Learn about the essential functions of kidneys and how to maintain their health through proper diet and lifestyle choices.',
    date: 'January 10, 2025',
    readTime: '5 min read',
    category: 'Kidney Care',
  },
  {
    title: 'Early Signs of Urological Problems',
    excerpt: 'Recognizing early warning signs can help in timely diagnosis and treatment of urological conditions.',
    date: 'January 5, 2025',
    readTime: '4 min read',
    category: 'Urology',
  },
  {
    title: 'Importance of Regular Health Checkups',
    excerpt: 'Regular health screenings can detect potential health issues early, leading to better outcomes.',
    date: 'December 28, 2024',
    readTime: '3 min read',
    category: 'General Health',
  },
];

export const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="blog" ref={ref} className="py-20 bg-muted/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-lighter text-primary rounded-full text-sm font-medium mb-4">
            Latest Updates
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Health Blog
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest health tips, medical insights, and hospital news.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 border border-border h-full flex flex-col">
                {/* Post Image Placeholder */}
                <div className="aspect-[16/10] bg-gradient-to-br from-primary-lighter to-secondary/20 relative">
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Post Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
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
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-primary"
          >
            Read More Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
