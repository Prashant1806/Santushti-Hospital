import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter, ArrowRight } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#about' },
  { name: 'Our Doctors', href: '#doctors' },
  { name: 'Services', href: '#services' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  { name: 'Urology', href: '#services' },
  { name: 'Kidney Care', href: '#services' },
  { name: 'General Surgery', href: '#services' },
  { name: 'Critical Care', href: '#services' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-card">
      <div className="container mx-auto py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-card">Santushti Hospital</h3>
                <p className="text-xs text-card/60">Multi Super Speciality</p>
              </div>
            </div>
            <p className="text-card/70 text-sm leading-relaxed mb-6">
              A premier multi-super speciality hospital in Varanasi, providing advanced healthcare with compassion and affordability since 2004.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-card/10 flex items-center justify-center text-card/70 hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-card/70 hover:text-primary flex items-center gap-2 text-sm transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-card/70 hover:text-primary flex items-center gap-2 text-sm transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919839058489"
                  className="flex items-start gap-3 text-card/70 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">+91 9839058489</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:santushti.hospital@gmail.com"
                  className="flex items-start gap-3 text-card/70 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">santushti.hospital@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-card/70">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Nevada, Sundarpur, Varanasi, Uttar Pradesh</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-card/10">
        <div className="container mx-auto py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-card/60">
            <p>© 2026 Santushti Hospital Pvt. Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-card transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-card transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
