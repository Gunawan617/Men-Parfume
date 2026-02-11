import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Men Parfume</h4>
            <p>
              Wewangian premium untuk pria modern yang menghargai kualitas dan gaya. 
              Setiap botol adalah pernyataan kepercayaan diri Anda.
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" title="TikTok">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h5>Navigasi</h5>
            <ul>
              <li><a href="#hero">Beranda</a></li>
              <li><a href="#why">Keunggulan</a></li>
              <li><a href="#products">Koleksi</a></li>
              <li><a href="#testimonials">Ulasan</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h5>Layanan Pelanggan</h5>
            <ul>
              <li><a href="/contact">Hubungi Kami</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/privacy">Kebijakan Privasi</a></li>
              <li><a href="/terms">Syarat & Ketentuan</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h5>Kontak</h5>
            <ul>
              <li>
                <strong>Email:</strong><br/>
                <a href="mailto:info@menparfume.id">info@menparfume.id</a>
              </li>
              <li>
                <strong>WhatsApp:</strong><br/>
                <a href="https://wa.me/+6281234567890">+62 812-3456-7890</a>
              </li>
              <li>
                <strong>Jam Operasional:</strong><br/>
                Senin-Minggu: 09:00 - 21:00 WIB
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>&copy; 2024 Men Parfume. Semua Hak Dilindungi.</p>
          <div className="payment-methods">
            <span><i className="fas fa-cc-mastercard"></i> Mastercard</span>
            <span><i className="fas fa-cc-visa"></i> Visa</span>
            <span><i className="fas fa-university"></i> BCA Transfer</span>
            <span><i className="fas fa-wallet"></i> GCash</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
