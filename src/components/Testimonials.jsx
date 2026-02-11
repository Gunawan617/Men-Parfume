import React from 'react';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rudi Hartono',
      role: 'Entrepreneur, Jakarta',
      content: 'Men Parfume benar-benar mengubah kesan pertama saya. Wewangian yang sophisticated, tahan lama, dan harganya sangat worth it!',
      rating: 5,
      icon: 'user-tie'
    },
    {
      id: 2,
      name: 'Budi Santoso',
      role: 'Profesional, Surabaya',
      content: 'Yang saya suka adalah proyeksinya sempurna. Tidak terlalu overwhelming tapi cukup powerful untuk membuat kesan positif di ruang meeting.',
      rating: 5,
      icon: 'briefcase'
    },
    {
      id: 3,
      name: 'Ahmad Wijaya',
      role: 'Corporate Manager, Bandung',
      content: 'Kualitas premium dengan harga yang masuk akal. Saya sudah order 3 kali dan selalu merekomendasikan ke teman-teman kantor saya.',
      rating: 5,
      icon: 'user'
    },
    {
      id: 4,
      name: 'Doni Setiawan',
      role: 'Dokter, Medan',
      content: 'Sebagai seorang dokter, saya peduli tentang kualitas dan keamanan. Men Parfume teruji dermatologi dan amannya terjamin. Sangat recommend!',
      rating: 5,
      icon: 'user-doctor'
    },
    {
      id: 5,
      name: 'Hendra Kusuma',
      role: 'Fashion Designer, Jakarta',
      content: 'Botol desainnya elegant banget. Cocok banget dengan koleksi accessories saya. Ini bukan hanya parfum, tapi statement fashion piece.',
      rating: 5,
      icon: 'vest'
    },
    {
      id: 6,
      name: 'Tomi Hermawan',
      role: 'Business Owner, Jogja',
      content: 'Customer service mereka responsif banget. Pernah ada pertanyaan dan dijawab dalam hitungan menit. Pengalaman belanja yang luar biasa!',
      rating: 5,
      icon: 'bullseye'
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Kepuasan Pelanggan Kami</h2>
          <p className="section-subtitle">Dengarkan dari ribuan pria yang sudah merasakan perbedaannya</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <i className={`fas fa-${testimonial.icon}`}></i>
                </div>
                <div className="testimonial-meta">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
            </div>
          ))}
        </div>

        <div className="testimonial-stats">
          <div className="stat-box">
            <div className="stat-number">12,847</div>
            <div className="stat-label">Pelanggan Puas</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">4.9/5</div>
            <div className="stat-label">Rating Rata-rata</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">98%</div>
            <div className="stat-label">Reorder Rate</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">100%</div>
            <div className="stat-label">Garansi Uang Kembali</div>
          </div>
        </div>

        <div className="trust-badges">
          <div className="badge">
            <span className="badge-icon">
              <i className="fas fa-check"></i>
            </span>
            <p>Tersertifikasi Internasional</p>
          </div>
          <div className="badge">
            <span className="badge-icon">
              <i className="fas fa-shield-alt"></i>
            </span>
            <p>Pembayaran Aman & Terpercaya</p>
          </div>
          <div className="badge">
            <span className="badge-icon">
              <i className="fas fa-box"></i>
            </span>
            <p>Gratis Ongkir Se-Indonesia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
