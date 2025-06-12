import React, { useState } from 'react';
import { 
  Gift, 
  Clock, 
  Star, 
  CheckCircle, 
  Phone,
  Calendar,
  Users,
  Zap,
  Shield,
  ArrowRight
} from 'lucide-react';

const Promotions = () => {
  const [selectedPromo, setSelectedPromo] = useState<number | null>(null);

  const promotions = [
    {
      id: 1,
      title: "Promo Service HP Bergaransi",
      subtitle: "Hemat hingga 30%",
      description: "Service HP dengan teknisi berpengalaman dan spare part original",
      originalPrice: "150.000",
      discountPrice: "105.000",
      discount: "30%",
      validUntil: "2025-02-28",
      features: [
        "Garansi service 3 bulan",
        "Spare part original",
        "Teknisi bersertifikat",
        "Free konsultasi"
      ],
      terms: [
        "Berlaku untuk semua jenis HP",
        "Tidak berlaku untuk kerusakan liquid damage",
        "Garansi void jika dibuka oleh pihak lain",
        "Promo tidak dapat digabung dengan promo lain"
      ],
      color: "from-blue-500 to-blue-600",
      icon: <Gift className="h-8 w-8" />,
      popular: true
    },
    {
      id: 2,
      title: "Paket Instalasi CCTV Lengkap",
      subtitle: "Promo Spesial Tahun Baru",
      description: "Paket instalasi CCTV 4 channel dengan kamera HD dan monitoring smartphone",
      originalPrice: "2.500.000",
      discountPrice: "1.999.000",
      discount: "20%",
      validUntil: "2025-01-31",
      features: [
        "4 kamera HD 1080p",
        "DVR 4 channel",
        "Hard disk 1TB",
        "Instalasi profesional",
        "Setting smartphone",
        "Garansi 1 tahun"
      ],
      terms: [
        "Berlaku untuk area Jabodetabek",
        "Instalasi maksimal 2 lantai",
        "Kabel maksimal 50 meter",
        "Garansi tidak termasuk kerusakan akibat petir"
      ],
      color: "from-red-500 to-red-600",
      icon: <Shield className="h-8 w-8" />,
      popular: false
    },
    {
      id: 3,
      title: "Service Laptop + Cleaning Gratis",
      subtitle: "Promo Bundling Hemat",
      description: "Service laptop lengkap dengan pembersihan menyeluruh dan optimasi performa",
      originalPrice: "200.000",
      discountPrice: "150.000",
      discount: "25%",
      validUntil: "2025-02-15",
      features: [
        "Diagnosa lengkap",
        "Pembersihan internal",
        "Optimasi sistem",
        "Update driver",
        "Backup data",
        "Garansi 6 bulan"
      ],
      terms: [
        "Berlaku untuk semua merk laptop",
        "Backup data maksimal 100GB",
        "Tidak termasuk penggantian spare part",
        "Garansi software 6 bulan"
      ],
      color: "from-green-500 to-green-600",
      icon: <Zap className="h-8 w-8" />,
      popular: false
    },
    {
      id: 4,
      title: "Paket Setting MikroTik + Training",
      subtitle: "Belajar Sambil Praktik",
      description: "Setting MikroTik profesional dengan bonus training dasar untuk pemula",
      originalPrice: "800.000",
      discountPrice: "600.000",
      discount: "25%",
      validUntil: "2025-03-31",
      features: [
        "Setting MikroTik lengkap",
        "Training 2 jam",
        "Modul pembelajaran",
        "Support 1 bulan",
        "Sertifikat training"
      ],
      terms: [
        "Training dilakukan setelah instalasi",
        "Maksimal 3 peserta per training",
        "Modul dalam bahasa Indonesia",
        "Support via WhatsApp"
      ],
      color: "from-purple-500 to-purple-600",
      icon: <Users className="h-8 w-8" />,
      popular: false
    }
  ];

  const flashSales = [
    {
      title: "Flash Sale Service HP",
      description: "Service HP express dalam 2 jam",
      price: "75.000",
      originalPrice: "100.000",
      timeLeft: "02:45:30",
      stock: 5
    },
    {
      title: "Recovery Data Darurat",
      description: "Recovery data dalam 24 jam",
      price: "200.000",
      originalPrice: "300.000",
      timeLeft: "05:20:15",
      stock: 3
    }
  ];

  const loyaltyProgram = {
    title: "Program Loyalitas TechService Pro",
    description: "Kumpulkan poin setiap transaksi dan dapatkan reward menarik",
    benefits: [
      "1 poin = Rp 1.000 transaksi",
      "100 poin = Diskon 10%",
      "500 poin = Service gratis",
      "1000 poin = Gadget gratis"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Promo & Penawaran Spesial
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dapatkan layanan teknologi terbaik dengan harga spesial. Promo terbatas, jangan sampai terlewat!
          </p>
        </div>

        {/* Flash Sales */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-8 text-white mb-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 flex items-center justify-center space-x-2">
                <Zap className="h-8 w-8" />
                <span>Flash Sale</span>
              </h2>
              <p className="text-red-100 text-lg">Penawaran terbatas dengan harga super hemat!</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {flashSales.map((sale, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border-2 border-red-200 p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{sale.title}</h3>
                    <p className="text-gray-600">{sale.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-600">Rp {sale.price}</div>
                    <div className="text-sm text-gray-500 line-through">Rp {sale.originalPrice}</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-red-500" />
                    <span className="text-red-600 font-semibold">{sale.timeLeft}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    Tersisa: <span className="font-semibold text-red-600">{sale.stock} slot</span>
                  </div>
                </div>

                <a
                  href="tel:0877-3887-6192"
                  className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Ambil Promo</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Main Promotions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className={`bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                promo.popular ? 'ring-2 ring-yellow-400' : ''
              }`}
            >
              {promo.popular && (
                <div className="bg-yellow-400 text-yellow-900 text-center py-2 font-semibold">
                  <Star className="inline h-4 w-4 mr-1" />
                  PALING POPULER
                </div>
              )}

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className={`bg-gradient-to-r ${promo.color} text-white p-3 rounded-2xl`}>
                    {promo.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gray-900">
                      Rp {promo.discountPrice}
                    </div>
                    <div className="text-sm text-gray-500 line-through">
                      Rp {promo.originalPrice}
                    </div>
                    <div className={`text-sm font-semibold bg-gradient-to-r ${promo.color} bg-clip-text text-transparent`}>
                      Hemat {promo.discount}
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{promo.title}</h3>
                <p className={`text-lg font-semibold bg-gradient-to-r ${promo.color} bg-clip-text text-transparent mb-3`}>
                  {promo.subtitle}
                </p>
                <p className="text-gray-600 mb-6">{promo.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Yang Anda Dapatkan:</h4>
                  <div className="space-y-2">
                    {promo.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>Berlaku hingga {new Date(promo.validUntil).toLocaleDateString('id-ID')}</span>
                  </div>
                  <button
                    onClick={() => setSelectedPromo(selectedPromo === promo.id ? null : promo.id)}
                    className="text-blue-600 text-sm font-medium hover:text-blue-700"
                  >
                    {selectedPromo === promo.id ? 'Tutup' : 'Lihat S&K'}
                  </button>
                </div>

                {selectedPromo === promo.id && (
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h5 className="font-semibold text-gray-900 mb-2">Syarat & Ketentuan:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {promo.terms.map((term, index) => (
                        <li key={index}>• {term}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <a
                  href="tel:0877-3887-6192"
                  className={`w-full bg-gradient-to-r ${promo.color} text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2`}
                >
                  <Phone className="h-5 w-5" />
                  <span>Ambil Promo Ini</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Loyalty Program */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl p-8 lg:p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">{loyaltyProgram.title}</h2>
            <p className="text-purple-100 text-lg">{loyaltyProgram.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loyaltyProgram.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-20 rounded-xl p-6 text-center backdrop-blur-sm"
              >
                <div className="text-2xl font-bold mb-2">{index + 1}</div>
                <p className="text-purple-100">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="tel:0877-3887-6192"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Daftar Sekarang</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* How to Claim */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Cara Mengambil Promo
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. Hubungi Kami</h3>
              <p className="text-gray-600">
                Telepon atau WhatsApp ke 0877-3887-6192 dan sebutkan promo yang diinginkan
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 text-green-600 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. Jadwalkan Service</h3>
              <p className="text-gray-600">
                Tentukan waktu dan tempat service sesuai dengan kebutuhan Anda
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 text-purple-600 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. Nikmati Promo</h3>
              <p className="text-gray-600">
                Dapatkan layanan berkualitas dengan harga promo dan garansi resmi
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Jangan Lewatkan Promo Terbatas Ini!</h2>
          <p className="text-xl mb-8 text-blue-100">
            Hubungi kami sekarang sebelum promo berakhir dan slot habis
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
              href="https://wa.me/6287738876192"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              WhatsApp Sekarang
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;