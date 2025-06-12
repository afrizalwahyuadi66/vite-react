import React, { useState } from 'react';
import { Calendar, Clock, User, ArrowRight, Tag, Search } from 'lucide-react';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'technology', name: 'Teknologi' },
    { id: 'tips', name: 'Tips & Trik' },
    { id: 'event', name: 'Event' },
    { id: 'update', name: 'Update Layanan' }
  ];

  const newsData = [
    {
      id: 1,
      title: "Tips Merawat Smartphone Agar Awet dan Tahan Lama",
      excerpt: "Pelajari cara merawat smartphone dengan benar agar performa tetap optimal dan umur baterai lebih panjang.",
      content: "Smartphone adalah investasi yang tidak murah, oleh karena itu penting untuk merawatnya dengan baik. Berikut adalah tips-tips yang bisa Anda terapkan: 1. Jangan biarkan baterai habis total, 2. Gunakan charger original, 3. Hindari overheating, 4. Bersihkan secara rutin, 5. Update software secara berkala.",
      category: "tips",
      author: "Tim TechService Pro",
      date: "2025-01-15",
      readTime: "5 menit",
      image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true
    },
    {
      id: 2,
      title: "Tanda-tanda Laptop Perlu Dibersihkan dan Diservice",
      excerpt: "Kenali gejala-gejala yang menunjukkan laptop Anda memerlukan perawatan profesional.",
      content: "Laptop yang tidak dirawat dengan baik dapat mengalami berbagai masalah. Berikut tanda-tanda laptop perlu diservice: 1. Laptop sering overheat, 2. Kipas berisik, 3. Performa menurun drastis, 4. Sering hang atau restart sendiri, 5. Baterai cepat habis.",
      category: "tips",
      author: "Ahmad Rizki",
      date: "2025-01-12",
      readTime: "4 menit",
      image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Keunggulan Instalasi CCTV untuk Keamanan Rumah",
      excerpt: "Mengapa CCTV menjadi investasi penting untuk keamanan rumah dan bisnis Anda.",
      content: "CCTV bukan hanya untuk monitoring, tetapi juga sebagai pencegah kejahatan. Manfaat CCTV: 1. Monitoring real-time, 2. Rekaman sebagai bukti, 3. Efek jera bagi pelaku kejahatan, 4. Monitoring jarak jauh via smartphone, 5. Meningkatkan nilai properti.",
      category: "technology",
      author: "Sari Dewi",
      date: "2025-01-10",
      readTime: "6 menit",
      image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      title: "Event Workshop: Setting MikroTik untuk Pemula",
      excerpt: "Ikuti workshop gratis kami untuk belajar dasar-dasar konfigurasi MikroTik.",
      content: "Kami mengadakan workshop gratis tentang setting MikroTik untuk pemula. Materi yang akan dibahas: 1. Pengenalan MikroTik, 2. Basic configuration, 3. Setting hotspot, 4. Bandwidth management, 5. Troubleshooting dasar. Daftar sekarang, tempat terbatas!",
      category: "event",
      author: "Tim TechService Pro",
      date: "2025-01-08",
      readTime: "3 menit",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5,
      title: "Update Layanan: Kini Melayani Recovery Data 24/7",
      excerpt: "Layanan recovery data kini tersedia 24 jam untuk kebutuhan darurat Anda.",
      content: "Kami dengan bangga mengumumkan layanan recovery data 24/7. Kehilangan data penting bisa terjadi kapan saja, oleh karena itu kami siap membantu Anda. Layanan meliputi: 1. Recovery data dari hard disk rusak, 2. Recovery data terhapus, 3. Recovery dari storage yang terformat, 4. Konsultasi gratis.",
      category: "update",
      author: "Budi Santoso",
      date: "2025-01-05",
      readTime: "4 menit",
      image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 6,
      title: "Cara Memilih Spesifikasi Laptop Sesuai Kebutuhan",
      excerpt: "Panduan lengkap memilih laptop dengan spesifikasi yang tepat untuk berbagai kebutuhan.",
      content: "Memilih laptop yang tepat sangat penting untuk produktivitas. Pertimbangan utama: 1. Tentukan kebutuhan (office, gaming, design), 2. Budget yang tersedia, 3. Spesifikasi processor, 4. Kapasitas RAM dan storage, 5. Kualitas layar dan keyboard, 6. Portabilitas dan daya tahan baterai.",
      category: "tips",
      author: "Ahmad Rizki",
      date: "2025-01-03",
      readTime: "7 menit",
      image: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const filteredNews = newsData.filter(news => {
    const matchesCategory = selectedCategory === 'all' || news.category === selectedCategory;
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredNews = newsData.filter(news => news.featured);
  const regularNews = filteredNews.filter(news => !news.featured);

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Berita & Event
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dapatkan informasi terbaru seputar teknologi, tips & trik, serta event menarik dari TechService Pro
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Cari berita..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured News */}
        {featuredNews.length > 0 && selectedCategory === 'all' && !searchTerm && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Berita Utama</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((news) => (
                <article
                  key={news.id}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative h-64">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(news.date).toLocaleDateString('id-ID')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{news.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Tag className="h-4 w-4" />
                        <span className="capitalize">{news.category}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {news.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{news.author}</span>
                      </div>
                      <button className="text-blue-600 font-medium flex items-center space-x-1 hover:text-blue-700 transition-colors duration-300">
                        <span>Baca Selengkapnya</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Regular News */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {selectedCategory === 'all' ? 'Berita Terbaru' : `Kategori: ${categories.find(c => c.id === selectedCategory)?.name}`}
          </h2>
          
          {filteredNews.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Tidak ada berita yang ditemukan.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularNews.map((news) => (
                <article
                  key={news.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative h-48">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium capitalize">
                        {news.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(news.date).toLocaleDateString('id-ID')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{news.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {news.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{news.author}</span>
                      </div>
                      <button className="text-blue-600 font-medium flex items-center space-x-1 hover:text-blue-700 transition-colors duration-300">
                        <span>Baca</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Dapatkan Update Terbaru</h2>
          <p className="text-xl mb-8 text-blue-100">
            Berlangganan newsletter kami untuk mendapatkan tips teknologi dan info promo terbaru
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;