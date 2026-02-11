import React from 'react';
import './why.css';

const Why = () => {
  const features = [
    {
      id: 1,
      title: 'Formula Premium Eksklusif',
      description: 'Dibuat dengan ingredien natural pilihan dari berbagai belahan dunia dengan konsentrasi parfum tertinggi di kelasnya.',
      icon: 'leaf'
    },
    {
      id: 2,
      title: 'Tahan Lama Hingga 12 Jam',
      description: 'Teknologi advanced polymer memastikan wangi Anda tetap terjaga sepanjang hari tanpa perlu aplikasi ulang.',
      icon: 'hourglass-end'
    },
    {
      id: 3,
      title: 'Desain Kemasan Premium',
      description: 'Botol kaca beremboss dengan desain elegan yang mencerminkan status dan gaya hidup mewah Anda.',
      icon: 'sparkles'
    },
    {
      id: 4,
      title: 'Proyeksi Sempurna',
      description: 'Atomizer presisi tinggi memberikan proyeksi yang konsisten dan merata pada seluruh tubuh Anda.',
      icon: 'wind'
    },
    {
      id: 5,
      title: 'Teruji Dermatologi',
      description: 'Aman untuk semua jenis kulit dan telah lulus uji dermatologi internasional tanpa efek sampingan.',
      icon: 'flask-vial'
    },
    {
      id: 6,
      title: 'Garansi Kepuasan 100%',
      description: 'Jika Anda tidak puas dalam 30 hari pertama, kami akan mengembalikan uang Anda sepenuhnya tanpa pertanyaan.',
      icon: 'check'
    }
  ];

  return (
    <section id="why" className="why">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Mengapa Memilih Men Parfume?</h2>
          <p className="section-subtitle">
            Kami tidak hanya menjual parfum, tapi membawa Anda ke tingkat kepercayaan diri yang baru
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">
                <i className={`fas fa-${feature.icon}`}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="why-highlight">
          <div className="highlight-content">
            <h3>Untuk Pria yang Mengerti Kualitas</h3>
            <p>
              Men Parfume adalah pilihan pria modern yang tidak puas dengan asal-asalan. Setiap detail dirancang 
              dengan cermat untuk memberikan pengalaman wewangian yang tak terlupakan. Dari proses fermentasi hingga 
              packaging, semuanya adalah hasil riset dan development bertahun-tahun.
            </p>
            <ul className="highlight-list">
              <li>Bahan baku impor dari Prancis, Italia, dan Jerman</li>
              <li>Master Perfumer bersertifikat internasional</li>
              <li>Quality control 5 tingkat sebelum sampai ke tangan Anda</li>
              <li>Komitmen pada keberlanjutan lingkungan</li>
            </ul>
          </div>
          <div className="highlight-visual">
            <div className="highlight-box">
              <span className="badge-elite">ELITE COLLECTION</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
