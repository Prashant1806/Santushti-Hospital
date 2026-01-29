import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Phone, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const BlogDetail = () => {
  const { id } = useParams();

  // In a real app, you'd fetch data based on the ID. 
  // Here is random content for demonstration:
  const content = {
    title: "Understanding Kidney Health & Super-Specialty Care",
    date: "February 2, 2025",
    readTime: "8 min read",
    author: "Dr. Expert (Santushti Hospital)",
    image: "/blog-kidney.jpg", // Ensure this exists in public folder
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="min-h-screen bg-background pb-20"
    >
      {/* Hero Section */}
      <div className="relative h-[400px] w-full bg-muted">
        <img 
          src={content.image} 
          alt="Blog Cover" 
          className="h-full w-full object-cover brightness-50" 
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <Link to="/" className="flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-5 w-5" /> Back to Blogs
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white max-w-4xl leading-tight">
              {content.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 mt-[-60px] relative z-10">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Article Body */}
          <div className="lg:col-span-2 bg-card p-8 md:p-12 rounded-3xl shadow-xl border border-border">
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span>{content.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>{content.readTime}</span>
              </div>
              <div className="text-primary font-medium">By {content.author}</div>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-xl text-foreground font-medium leading-relaxed">
                Maintaining kidney health is essential for overall well-being. Your kidneys filter waste, balance electrolytes, and regulate blood pressure.
              </p>
              
              <h2 className="text-2xl font-bold text-foreground mt-8">1. Hydration is Key</h2>
              <p>
                Drinking enough water helps your kidneys clear sodium and toxins from the body. It is one of the best ways to reduce your risk of chronic kidney disease. Aim for at least 8 glasses a day, adjusted for your activity level.
              </p>

              

[Image of the human urinary system]


              <h2 className="text-2xl font-bold text-foreground mt-8">2. Monitor Blood Pressure</h2>
              <p>
                High blood pressure can cause kidney damage. If high blood pressure occurs with other health issues like diabetes or high cholesterol, the impact on your body can be significant.
              </p>

              <blockquote className="border-l-4 border-primary pl-6 py-2 italic bg-muted/50 rounded-r-lg">
                "Early detection is the most powerful tool we have in urology and nephrology. Regular screenings save lives."
              </blockquote>

              <p>
                At Santushti Hospital, we utilize advanced diagnostic tools to ensure your renal system is functioning at its peak. Our experts in Varanasi are dedicated to providing compassionate care.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Appointment CTA */}
            <div className="bg-primary p-8 rounded-3xl text-primary-foreground shadow-lg shadow-primary/20">
              <h3 className="text-2xl font-bold mb-4">Need Expert Advice?</h3>
              <p className="mb-6 opacity-90">Book an appointment with our specialist doctors today for a comprehensive checkup.</p>
              <Button variant="secondary" className="w-full py-6 text-lg font-bold">
                Book Now
              </Button>
              <div className="mt-6 flex items-center justify-center gap-2 text-sm">
                <Phone className="h-4 w-4" /> +(91)-9839058489
              </div>
            </div>

            {/* Social Share */}
            <div className="bg-card p-6 rounded-2xl border border-border">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Share2 className="h-4 w-4" /> Share this Article
              </h4>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">Facebook</Button>
                <Button variant="outline" size="sm" className="flex-1">WhatsApp</Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};