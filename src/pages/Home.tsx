import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  Laptop, 
  Wifi, 
  Camera, 
  Settings, 
  Shield,
  Clock,
  Award,
  Users,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Service HP & Tablet",
      description: "Reparasi LCD, Flash HP, Custom ROM Android, Service Part Tambahan, Bypass iCloud",
      image: "/IMG-20250612-WA0028.jpg"
    },
    {
      icon: <Laptop className="h-8 w-8" />,
      title: "Service Laptop & PC",
      description: "Service Hardware, Instalasi Software, Recovery Data, Pembersihan & Optimasi",
      image: "/IMG-20250612-WA0029.jpg"
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Instalasi Jaringan",
      description: "Instalasi Jaringan Paralel, Setting Access Point, Planning Coverage Jaringan",
      image: "/IMG-20250612-WA0033.jpg"
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Instalasi CCTV",
      description: "Konsultasi Gratis, Instalasi Professional, Camera HD & Tahan Cuaca",
      image: "/IMG-20250612-WA0031.jpg"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Setting MikroTik",
      description: "Instalasi & Setting MikroTik untuk berbagai kebutuhan jaringan",
      image: "/IMG-20250612-WA0032.jpg"
    }
  ];

  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Bergaransi",
      description: "Semua layanan kami bergaransi resmi"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Service",
      description: "Layanan darurat tersedia 24 jam"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Teknisi Berpengalaman",
      description: "Tim teknisi profesional dan bersertifikat"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Pelayanan Terbaik",
      description: "Kepuasan pelanggan adalah prioritas utama"
    }
  ];

  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Pemilik Warnet",
      content: "Service laptop dan instalasi jaringan sangat memuaskan. Teknisinya profesional dan hasilnya berkualitas.",
      rating: 5
    },
    {
      name: "Sari Dewi",
      role: "Mahasiswa",
      content: "HP saya yang rusak LCD bisa diperbaiki dengan sempurna. Harga terjangkau dan bergaransi.",
      rating: 5
    },
    {
      name: "Ahmad Rizki",
      role: "Pengusaha",
      content: "Instalasi CCTV di kantor sangat rapi dan kualitas gambar jernih. Recommended!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-cyan-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-300 rounded-full opacity-20 animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Solusi Teknologi
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                Professional & Bergaransi
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Perbaiki masalah HP, laptop, komputer dengan cepat dan aman. 
              Wujudkan internet stabil di tempat Anda!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:0877-3887-6192"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Hubungi Sekarang</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                Lihat Layanan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Solusi lengkap untuk semua kebutuhan teknologi Anda dengan teknisi berpengalaman
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white p-3 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <div className="mt-4 flex items-center text-blue-600 font-medium">
                    <span>Pelajari lebih lanjut</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Pilih Kami?
            </h2>
            <p className="text-xl text-gray-600">
              Komitmen kami untuk memberikan layanan terbaik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Testimoni Pelanggan
            </h2>
            <p className="text-xl text-gray-600">
              Kepuasan pelanggan adalah prioritas utama kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Membantu Masalah Teknologi Anda?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Hubungi kami sekarang untuk konsultasi gratis dan solusi terbaik
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0877-3887-6192"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              0877-3887-6192
            </a>
            <a
              href="https://instagram.com/teamtam_04"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              @teamtam_04
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;