import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ChevronDown, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const doctors = [
  { name: 'Dr. Sunjay Garg', href: '#doctors' },
  { name: 'Dr. Ritu Garg', href: '#doctors' },
  { name: 'Dr. Priyansh Garg', href: '#doctors' },
  { name: 'Dr. Pranjal Garg', href: '#doctors' },
];

const educationInstitutes = [
  { name: 'Santushti Institute Of Nursing & Paramedical Sciences', href: '#education' },
  { name: 'Santushti College Of Nursing', href: '#education' },
  { name: 'Santushti College Of Higher Studies', href: '#education' },
  { name: 'Santushti Ayurvedic Nursing College & Hospital', href: '#education' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Emergency Top Bar */}
      <div className="bg-gradient-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-2 text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+919839058489" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              <span>+91 9839058489</span>
            </a>
          </div>
          <div className="flex items-center gap-2 font-semibold">
            <AlertCircle className="w-4 h-4 animate-pulse" />
            <span>Emergency: 24×7</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          isScrolled
            ? 'bg-card/95 backdrop-blur-md shadow-soft py-3'
            : 'bg-card py-4'
        )}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-primary">
              <span className="text-primary-foreground font-heading font-bold text-xl">S</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-heading font-bold text-lg text-foreground leading-tight">
                Santushti Hospital
              </h1>
              <p className="text-xs text-muted-foreground">Multi Super Speciality</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#"
                    className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#about"
                    className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Doctors
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[280px] p-3 bg-card shadow-elevated rounded-xl">
                      {doctors.map((doctor) => (
                        <li key={doctor.name}>
                          <NavigationMenuLink
                            href={doctor.href}
                            className="block px-4 py-2.5 text-sm text-foreground hover:bg-primary-lighter hover:text-primary rounded-lg transition-colors"
                          >
                            {doctor.name}
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#services"
                    className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Healthcare
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Education
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[380px] p-3 bg-card shadow-elevated rounded-xl">
                      {educationInstitutes.map((institute) => (
                        <li key={institute.name}>
                          <NavigationMenuLink
                            href={institute.href}
                            className="block px-4 py-2.5 text-sm text-foreground hover:bg-primary-lighter hover:text-primary rounded-lg transition-colors"
                          >
                            {institute.name}
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#videos"
                    className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Media
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#blog"
                    className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Blog
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#contact"
                    className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-3">
            <Button
              variant="default"
              size="lg"
              className="hidden sm:flex bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-primary font-semibold"
              asChild
            >
              <a href="#appointment">Book Appointment</a>
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card border-t border-border"
            >
              <nav className="container mx-auto py-4 space-y-2">
                <a href="#" className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg">Home</a>
                <a href="#about" className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg">About</a>
                <a href="#doctors" className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg">Doctors</a>
                <a href="#services" className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg">Healthcare</a>
                <a href="#education" className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg">Education</a>
                <a href="#videos" className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg">Media</a>
                <a href="#blog" className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg">Blog</a>
                <a href="#contact" className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg">Contact</a>
                <Button className="w-full mt-4 bg-gradient-primary" asChild>
                  <a href="#appointment">Book Appointment</a>
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
