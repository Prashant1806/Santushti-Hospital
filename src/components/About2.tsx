import React from 'react';
import { useRef } from 'react';

import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const AboutPage = () => {
    const ref = useRef(null);
  const stats = [
    { label: "Years Of Service", value: "20+" },
    { label: "Cured Patients", value: "50K+" },
    { label: "Positive Reviews", value: "99%" },
    { label: "Recognitions", value: "15+" }
  ];

  const values = ["Integrity", "Patient Safety", "Transparency", "Passion for Excellence", "Teamwork"];

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section id="about2"  ref={ref} className="bg-blue-50 py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-blue-900 text-sm font-bold uppercase tracking-widest mb-2">About Santushti Hospital</h1>
            <h2 className="text-4xl font-bold mb-6 leading-tight">Advanced Healthcare Meets <span className="text-blue-600">Compassionate Care.</span></h2>
            <p className="text-gray-600 mb-4 italic">Located near BHU, Varanasi, we are a leading super-specialty hospital renowned for our expertise in urology and kidney care.</p>
            <p className="text-gray-600 leading-relaxed">
              Over the past 20+ years, we have proudly served thousands of patients. We believe healthcare is not just about curing illnesses—it’s about treating every individual with dignity, empathy, and respect. 
            </p>
              <p className="text-gray-600 leading-relaxed">
             Our Mission To provide holistic, high-quality healthcare services through a blend of medical expertise, state-of-the-art technology, and compassionate care, ensuring every patient’s physical, emotional, and mental well-being. Our Vision To be a trusted leader in healthcare by setting new benchmarks in medical excellence, patient satisfaction, and ethical practices.
We provide holistic healthcare in urology!
Located near BHU, Varanasi, we are a leading super-specialty hospital renowned for our expertise in urology and kidney care. Our mission is simple yet profound: to provide world-class medical services while ensuring every patient feels valued and supported.
            </p>
          </div>
          <div className="md:w-1/2 bg-blue-200 h-64 w-full rounded-2xl shadow-xl flex items-center justify-center">
            {/* Replace with <img src="/hospital-building.jpg" /> */}
            <span className="text-blue-800 font-medium">Hospital Image Placeholder</span>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="bg-blue-900 py-12 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6 text-center">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div className="text-4xl font-bold mb-1">{stat.value}</div>
              <div className="text-blue-200 text-sm uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="p-8 border rounded-xl hover:shadow-md transition-shadow">
          <h3 className="text-2xl font-bold text-blue-900 mb-4 border-b-2 border-blue-600 inline-block">Our Mission</h3>
          <p className="text-gray-600">To provide holistic, high-quality healthcare services through a blend of medical expertise, state-of-the-art technology, and compassionate care, ensuring every patient’s physical, emotional, and mental well-being.</p>
        </div>
        <div className="p-8 border rounded-xl hover:shadow-md transition-shadow">
          <h3 className="text-2xl font-bold text-blue-900 mb-4 border-b-2 border-blue-600 inline-block">Our Vision</h3>
          <p className="text-gray-600">To establish Santushti Hospital as a trusted leader in healthcare, known for innovation, integrity, and unwavering dedication to patient satisfaction.</p>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h3 className="text-3xl font-bold mb-10">Core Values</h3>
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
          {values.map((v, i) => (
            <span key={i} className="bg-white px-6 py-3 rounded-full shadow-sm font-medium text-blue-700 border border-blue-100">
              {v}
            </span>
          ))}
        </div>
      </section>

      {/* Appointment/Contact Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Phone className="text-blue-600" />
              <span>+91-9839058489</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-blue-600" />
              <span>santushti.hospital@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-blue-600" />
              <span>Nevada, Sunderpur, Varanasi</span>
            </div>
          </div>
          
          <div className="mt-8 flex gap-4">
            <Facebook className="cursor-pointer hover:text-blue-600" />
            <Instagram className="cursor-pointer hover:text-pink-600" />
            <Youtube className="cursor-pointer hover:text-red-600" />
          </div>
        </div>

        <form className="bg-white p-8 rounded-xl shadow-lg border">
          <h4 className="text-xl font-bold mb-4">Book an Appointment</h4>
          <div className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 outline-none" />
            <input type="email" placeholder="Email Address" className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 outline-none" />
            <input type="text" placeholder="Mobile No." className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 outline-none" />
            <textarea placeholder="Message" className="w-full p-3 border rounded h-32 focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
            <button className="w-full bg-blue-600 text-white py-3 rounded font-bold hover:bg-blue-700 transition">Submit Appointment</button>
          </div>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-6 text-center border-t border-gray-800">
        <p>© 2026 | All Rights Reserved | Santushti Hospital Private Limited</p>
        <p className="text-xs mt-2 italic text-gray-600">Developed By Ankit Pandey</p>
      </footer>
    </div>
  );
};

export default AboutPage;