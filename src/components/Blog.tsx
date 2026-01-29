import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "How to take care of your kidneys a complete guide",
    excerpt:
      "Learn about the essential functions of kidneys and how to maintain their health through proper diet and lifestyle choices.",
    date: "January 10, 2025",
    readTime: "5 min read",
    category: "Kidney Care",
    // In Vite, place images in the /public folder and reference them with absolute paths
    image: "/blog-kidney.jpg",
  },
  {
    title: "How to take care of your kidneys in winters",
    excerpt:
      "Recognizing early warning signs can help in timely diagnosis and treatment of urological conditions.",
    date: "January 5, 2025",
    readTime: "4 min read",
    category: "Urology",
    image: "/blog-winter.jfif",
  },
  {
    title: "What is nephrotic syndrome",
    excerpt:
      "Regular health screenings can detect potential health issues early, leading to better outcomes.",
    date: "December 28, 2024",
    readTime: "3 min read",
    category: "General Health",
    image: "/blog-nephrotic.jfif",
  },
  {
    title: "Conveniently book appointments with our expert doctors",
    excerpt:
      "Regular health screenings can detect potential health issues early, leading to better outcomes.",
    date: "December 28, 2024",
    readTime: "3 min read",
    category: "General Health",
    image: "/blog-appointment.jfif",
  },
];

export const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" ref={ref} className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
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
            Stay informed with the latest health tips, medical insights, and
            hospital news.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <Link to={`/blog/${index}`} className="group cursor-pointer">
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 border border-border h-full flex flex-col">
                  {/* Image Section */}
                  <div className="aspect-[16/10] relative overflow-hidden bg-muted">
                    <img
                      src={post.image}
                      alt={post.title}
                      // 'h-full w-full object-cover' ensures it fills the aspect ratio container
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
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

                    <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border mt-auto">
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
            </Link>
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
            className="bg-primary hover:opacity-90 text-primary-foreground"
          >
            Read More Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
