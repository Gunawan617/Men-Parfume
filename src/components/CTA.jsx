import React from 'react';
import './cta.css';

const CTA = () => {
  return (
    <section id="cta" className="cta">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2>Saatnya Tingkatkan Gaya Hidup Anda</h2>
            <p>
              Jangan biarkan kesempatan ini berlalu. Bergabunglah dengan ribuan pria yang sudah 
              merasakan transformasi diri mereka dengan Men Parfume. Dapatkan penampilan premium 
              dan kepercayaan diri yang Anda pantas miliki.
            </p>
            <ul className="cta-benefits">
              <li>Gratis konsultasi aroma sesuai kepribadian Anda</li>
              <li>Cicilan 0% untuk pembelian paket bundling</li>
              <li>Garansi kepuasan uang kembali 100%</li>
              <li>Gratis ongkir se-Indonesia</li>
            </ul>
          </div>
          <div className="cta-form">
            <h3>Mulai Perjalanan Anda Sekarang</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" placeholder="Nama Lengkap" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Anda" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Nomor Whatsapp" required />
              </div>
              <div className="form-group">
                <select required>
                  <option value="">Pilih Preferensi Aroma</option>
                  <option value="fresh">Fresh & Citrus (Segar & Energik)</option>
                  <option value="wood">Woody (Maskulin & Sophisticated)</option>
                  <option value="spicy">Spicy & Oriental (Berani & Misterius)</option>
                  <option value="floral">Floral (Elegan & Timeless)</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                Dapatkan Penawaran Eksklusif Sekarang
              </button>
              <p className="form-note">
                Kami tidak akan membagikan informasi Anda. Dapatkan tips eksklusif dan penawaran spesial di email Anda.
              </p>
            </form>
          </div>
        </div>

        <div className="cta-urgency">
          <div className="urgency-box">
            <span className="urgency-badge">
              <i className="fas fa-exclamation-triangle"></i> PENAWARAN TERBATAS
            </span>
            <p>
              <strong>Dapatkan Diskon 25%</strong> untuk pembelian hari ini + gratis sample travel size
            </p>
            <div className="countdown">
              <span className="timer">Offer berakhir dalam:</span>
              <div className="clock">23:45:32</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
