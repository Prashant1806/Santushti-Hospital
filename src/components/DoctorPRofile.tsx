import React from 'react';
import { useParams } from 'react-router-dom';
import { doctorsData } from './doctorsData';
import { Award, Heart, BookOpen, Microscope, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

const DoctorProfile = () => {
    const { doctorId } = useParams();

  // 2. Find the specific doctor in your data
  const doctor = doctorsData.find((d) => d.id === doctorId);
  return (
    <div className="bg-white min-h-screen">
      {/* Header / Hero Section */}
      <section className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-300 rounded-2xl overflow-hidden border-4 border-blue-500 shrink-0">
             <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2">{doctor.name}</h1>
            <p className="text-blue-400 font-medium text-lg mb-4">{doctor.qualifications}</p>
            <p className="text-gray-300 leading-relaxed max-w-2xl">{doctor.description}</p>
            
            <div className="mt-8 flex gap-6 items-center">
              <span className="font-semibold text-sm uppercase tracking-wider">Connect:</span>
              <div className="flex gap-4">
                <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-500" />
                <Instagram className="w-5 h-5 cursor-pointer hover:text-pink-500" />
                <Youtube className="w-5 h-5 cursor-pointer hover:text-red-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        
        {/* Left Column: Awards & Recognitions */}
        <div className="md:col-span-2 space-y-12">
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-blue-600 w-8 h-8" />
              <h2 className="text-2xl font-bold text-slate-800">Awards & Professional Excellence</h2>
            </div>
            <ul className="space-y-4">
              {doctor.awards.map((award, i) => (
                <li key={i} className="flex gap-3 text-gray-700 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                  <span className="text-blue-600 font-bold">•</span> {award}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <Heart className="text-red-500 w-8 h-8" />
              <h2 className="text-2xl font-bold text-slate-800">Social Welfare & Free Camps</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {doctor.socialCamps.map((camp, i) => (
                <div key={i} className="p-4 border border-gray-100 rounded-lg bg-white shadow-sm hover:shadow-md transition">
                  <p className="text-sm text-gray-600 italic leading-snug">{camp}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Educational & Specializations */}
        <div className="space-y-8">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <Microscope className="text-blue-600" />
              <h3 className="font-bold text-lg">Rare Case Presentations</h3>
            </div>
            <ul className="text-sm space-y-2 text-gray-600">
              {doctor.rareCases.map((item, i) => <li key={i}>• {item}</li>)}
            </ul>
          </div>

          <div className="bg-blue-600 p-6 rounded-xl text-white">
            <h3 className="text-xl font-bold mb-4">Emergency Appointment</h3>
            <p className="text-sm mb-6 opacity-90">Book a priority consultation with Dr. Sanjay Garg.</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-blue-700 p-3 rounded">
                <Phone size={18} /> <span>+91 9839058489</span>
              </div>
              <div className="flex items-center gap-3 bg-blue-700 p-3 rounded">
                <Mail size={18} /> <span className="text-xs">santushti.hospital@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DoctorProfile;