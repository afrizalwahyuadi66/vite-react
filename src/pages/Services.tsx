import React from 'react';
import { 
  Smartphone, 
  Laptop, 
  Wifi, 
  Camera, 
  Settings,
  CheckCircle,
  Clock,
  Shield,
  Phone
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "Service HP & Tablet",
      subtitle: "Professional dan Bergaransi",
      description: "Perbaiki masalah Handphone anda dengan cepat dan aman!",
      features: [
        "Reparasi LCD",
        "Flash HP",
        "Custom ROM Android",
        "Service Part Tambahan",
        "Bypass iCloud"
      ],
      image: "/IMG-20250612-WA0028.jpg",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Laptop className="h-12 w-12" />,
      title: "Service Laptop & Komputer",
      subtitle: "Atasi masalah dengan cepat dan tepat!",
      description: "Solusi lengkap untuk semua masalah laptop dan komputer Anda",
      features: [
        "Service Hardware",
        "Instalasi Perangkat Lunak",
        "Install Ulang OS",
        "Custom ROM OS",
        "Pemulihan Data yang Terhapus",
        "Pembersihan Laptop dan PC",
        "Jasa Sanitasi Data PC & Laptop",
        "Rakit PC"
      ],
      image: "/IMG-20250612-WA0029.jpg",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Wifi className="h-12 w-12" />,
      title: "Instalasi Jaringan Internet",
      subtitle: "Instalasi dengan teknisi professional",
      description: "Wujudkan internet di tempat anda stabil",
      features: [
        "Instalasi Jaringan Paralel",
        "Setting Access Point Tambahan",
        "Planing coverage jaringan di lokasi anda",
        "Instalasi Kabel LAN / FO",
        "Troubleshooting Kendala Jaringan"
      ],
      image: "/IMG-20250612-WA0033.jpg",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Camera className="h-12 w-12" />,
      title: "Instalasi CCTV",
      subtitle: "Professional & Terpercaya",
      description: "Amankan rumah, kantor, serta tempat usaha anda dengan CCTV berkualitas!",
      features: [
        "Konsultasi kebutuhan CCTV Gratis",
        "Pemilihan camera sesuai lokasi",
        "Instalasi rapi oleh teknisi professional",
        "Setting & Koneksi ke HP anda"
      ],
      advantages: [
        "Camera berkualitas HD & tahan cuaca",
        "Harga terjangkau dan bersaing",
        "After-sales service bergaransi"
      ],
      image: "/IMG-20250612-WA0031.jpg",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Settings className="h-12 w-12" />,
      title: "Setting MikroTik",
      subtitle: "Wujudkan Internet Stabil anti Lemot",
      description: "Atur dan kelola jaringan anda dengan mudah, stabil, dan optimal!",
      features: [
        "Instalasi MikroTik",
        "Setting MikroTik untuk usaha Live Affiliate",
        "Setting MikroTik untuk Jaringan Sekolah",
        "Setting MikroTik untuk Optimasi Jaringan",
        "Setting MikroTik untuk Voucheran & Rumahan"
      ],
      image: "/IMG-20250612-WA0032.jpg",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Layanan Kami
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Solusi teknologi lengkap dengan teknisi berpengalaman dan bergaransi resmi. 
            Kepuasan pelanggan adalah prioritas utama kami.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl shadow-xl overflow-hidden ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex`}
            >
              {/* Image Section */}
              <div className="lg:w-1/2 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-20`}></div>
                <div className="absolute top-6 left-6">
                  <div className={`bg-gradient-to-r ${service.color} text-white p-4 rounded-2xl shadow-lg`}>
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h2>
                <p className={`text-lg font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-4`}>
                  {service.subtitle}
                </p>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Layanan Kami:</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Advantages (for CCTV service) */}
                {service.advantages && (
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Kenapa Pilih Kami?</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {service.advantages.map((advantage, advantageIndex) => (
                        <div key={advantageIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                          <span className="text-gray-700">{advantage}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                <a
                  href="tel:0877-3887-6192"
                  className={`inline-flex items-center space-x-2 bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                >
                  <Phone className="h-5 w-5" />
                  <span>Hubungi Sekarang</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-20 bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Keunggulan Layanan Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Bergaransi</h3>
              <p className="text-gray-600">Semua layanan kami bergaransi resmi untuk kepuasan pelanggan</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cepat & Tepat</h3>
              <p className="text-gray-600">Penanganan masalah dengan cepat dan solusi yang tepat sasaran</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Teknisi Berpengalaman</h3>
              <p className="text-gray-600">Tim teknisi profesional dengan pengalaman bertahun-tahun</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Butuh Bantuan Sekarang?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Hubungi kami untuk konsultasi gratis dan dapatkan solusi terbaik
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0877-3887-6192"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>0877-3887-6192</span>
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
      </div>
    </div>
  );
};

export default Services;