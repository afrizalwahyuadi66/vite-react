import React from 'react';
import { Phone, Instagram, MapPin, Clock, Mail, Settings } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-2 rounded-lg">
                <Settings className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">TechService Pro</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Penyedia jasa layanan teknologi terpercaya dengan pengalaman bertahun-tahun. 
              Kami melayani service HP, komputer, laptop, instalasi jaringan, setting MikroTik, 
              dan instalasi CCTV dengan teknisi profesional dan bergaransi.
            </p>
            <div className="flex space-x-4">
              <a
                href="tel:0877-3887-6192"
                className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-colors duration-300"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/teamtam_04"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Layanan Kami</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Service HP & Tablet</li>
              <li>Service Laptop & PC</li>
              <li>Instalasi Jaringan</li>
              <li>Setting MikroTik</li>
              <li>Instalasi CCTV</li>
              <li>Recovery Data</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>0877-3887-6192</span>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram className="h-4 w-4 text-blue-400" />
                <span>@teamtam_04</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span>24/7 Emergency</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 TechService Pro. All rights reserved. Professional & Bergaransi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;