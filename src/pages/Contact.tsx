import React, { useState } from 'react';
import { 
  Phone, 
  Instagram, 
  MapPin, 
  Clock, 
  Mail, 
  MessageCircle,
  Send,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telepon",
      content: "0877-3887-6192",
      description: "Hubungi kami kapan saja",
      action: "tel:0877-3887-6192",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      title: "Instagram",
      content: "@teamtam_04",
      description: "Follow untuk update terbaru",
      action: "https://instagram.com/teamtam_04",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      content: "0877-3887-6192",
      description: "Chat langsung dengan kami",
      action: "https://wa.me/6287738876192",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Jam Operasional",
      content: "24/7 Emergency",
      description: "Siap melayani kapan saja",
      color: "from-blue-500 to-blue-600"
    }
  ];

  const services = [
    "Service HP & Tablet",
    "Service Laptop & PC",
    "Instalasi Jaringan Internet",
    "Instalasi CCTV",
    "Setting MikroTik",
    "Recovery Data",
    "Konsultasi Teknologi"
  ];

  const faqs = [
    {
      question: "Berapa lama waktu pengerjaan service HP?",
      answer: "Waktu pengerjaan bervariasi tergantung jenis kerusakan. Untuk kerusakan ringan seperti ganti LCD biasanya 1-2 jam, sedangkan untuk kerusakan berat bisa 1-3 hari kerja."
    },
    {
      question: "Apakah ada garansi untuk layanan yang diberikan?",
      answer: "Ya, semua layanan kami bergaransi. Garansi service HP 1-3 bulan, service laptop 1-6 bulan, dan instalasi CCTV/jaringan 1 tahun tergantung jenis layanan."
    },
    {
      question: "Apakah bisa service di tempat (home service)?",
      answer: "Ya, kami menyediakan layanan home service untuk area tertentu dengan biaya tambahan transportasi. Hubungi kami untuk informasi lebih lanjut."
    },
    {
      question: "Bagaimana cara mengetahui estimasi biaya service?",
      answer: "Anda bisa konsultasi gratis melalui WhatsApp atau datang langsung ke tempat kami untuk pengecekan dan estimasi biaya tanpa dipungut biaya."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hubungi Kami
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Siap membantu menyelesaikan masalah teknologi Anda. Konsultasi gratis dan pelayanan 24/7 untuk kebutuhan darurat.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center"
            >
              <div className={`bg-gradient-to-r ${info.color} text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                {info.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
              <p className="text-gray-900 font-semibold mb-1">{info.content}</p>
              <p className="text-gray-600 text-sm mb-4">{info.description}</p>
              {info.action && (
                <a
                  href={info.action}
                  target={info.action.startsWith('http') ? '_blank' : undefined}
                  rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`inline-block bg-gradient-to-r ${info.color} text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                >
                  Hubungi
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
            
            {isSubmitted && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-green-700">Pesan berhasil dikirim! Kami akan segera menghubungi Anda.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Telepon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="08xx-xxxx-xxxx"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="nama@email.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Jenis Layanan *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Pilih jenis layanan</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan / Deskripsi Masalah *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Jelaskan masalah atau kebutuhan Anda..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Kirim Pesan</span>
              </button>
            </form>
          </div>

          {/* FAQ Section */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Pertanyaan Umum</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Butuh Bantuan Segera?</h3>
              <p className="text-blue-100 mb-6">
                Untuk kebutuhan darurat, hubungi kami langsung melalui telepon atau WhatsApp
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:0877-3887-6192"
                  className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Telepon Sekarang</span>
                </a>
                <a
                  href="https://wa.me/6287738876192"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Lokasi Kami</h2>
            <p className="text-gray-600 text-center mb-6">
              Kunjungi workshop kami untuk konsultasi langsung dan service berkualitas
            </p>
          </div>
          <div className="h-64 bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">Peta lokasi akan ditampilkan di sini</p>
              <p className="text-sm text-gray-500 mt-2">
                Hubungi kami untuk informasi lokasi detail
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;