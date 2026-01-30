import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Phone, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { blogPosts } from '../components/blogPostData'; // Import your data

export const BlogDetail = () => {
  const { id } = useParams();
  
  // Find the post based on the index (the ID from the URL)
  const postIndex = parseInt(id || "0");
  const post = blogPosts[postIndex];

  // Fallback if post is not found
  if (!post) {
    return <div className="text-center py-20">Post not found</div>;
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="min-h-screen bg-background pb-20"
    >
      {/* Hero Section */}
      <div className="relative h-[400px] w-full bg-muted">
        <img 
          src={post.image} 
          alt={post.title} 
          className="h-full w-full object-cover brightness-50" 
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <Link to="/" className="flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-5 w-5" /> Back to Blogs
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white max-w-4xl leading-tight capitalize">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 mt-[-60px] relative z-10">
        <div className="grid lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 bg-card p-8 md:p-12 rounded-3xl shadow-xl border border-border">
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>{post.readTime}</span>
              </div>
              <div className="text-primary font-medium">{post.category}</div>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              {/* This renders the specific excerpt or a full content field if you add one */}
              <p className="text-xl text-foreground font-medium leading-relaxed">
                {post.excerpt}
              </p>

              

[Image of the human urinary system]

              
              <h2 className="text-2xl font-bold text-foreground mt-8">Medical Overview</h2>
              <p>
                At Santushti Hospital, we emphasize that <strong>{post.title}</strong> is a critical topic for our patients. 
                Whether you are visiting us in Varanasi or reading from afar, understanding your health is the first step toward recovery.
              </p>

              <blockquote className="border-l-4 border-primary pl-6 py-2 italic bg-muted/50 rounded-r-lg">
                "Early detection in {post.category} is the most powerful tool we have. Regular screenings save lives."
              </blockquote>

              <p>
                Our expert doctors are available for consultation regarding any concerns you have after reading this guide.
              </p>
            </div>
          </div>

          {/* Sidebar (Same as before) */}
          <div className="space-y-8">
            <div className="bg-primary p-8 rounded-3xl text-primary-foreground shadow-lg shadow-primary/20">
              <h3 className="text-2xl font-bold mb-4">Need Expert Advice?</h3>
              <p className="mb-6 opacity-90">Book an appointment with our specialist doctors today.</p>
              <Button variant="secondary" className="w-full py-6 text-lg font-bold">
                Book Now
              </Button>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};