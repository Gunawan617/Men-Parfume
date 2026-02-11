import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/contentful';
import './products.css';

// Helper function to extract text from Contentful Rich Text
const extractTextFromRichText = (richText) => {
  if (!richText) return '';
  if (typeof richText === 'string') return richText;
  
  if (richText.content && Array.isArray(richText.content)) {
    return richText.content
      .map((block) => {
        if (block.content && Array.isArray(block.content)) {
          return block.content
            .map((item) => item.value || '')
            .join('');
        }
        return '';
      })
      .join(' ');
  }
  
  return '';
};

// Helper function to format price as Indonesian currency
const formatPrice = (price) => {
  if (typeof price === 'number') {
    return `Rp ${price.toLocaleString('id-ID')}`;
  }
  return price || 'Hubungi kami';
};

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  if (loading) {
    return (
      <section id="products" className="products">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Koleksi Eksklusif</h2>
            <p className="section-subtitle">Menemukan wewangian yang sempurna untuk Anda</p>
          </div>
          <div className="loading">
            <div className="spinner"></div>
            <p>Memuat koleksi kami...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="products">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Koleksi Eksklusif</h2>
          <p className="section-subtitle">Menemukan wewangian yang sempurna untuk Anda</p>
        </div>

        {products.length === 0 ? (
          <div className="no-products">
            <p>⚠️ Tidak ada produk yang tersedia saat ini.</p>
            <p style={{ fontSize: '0.9rem', marginTop: '10px', color: '#999' }}>
              Mohon pastikan Anda telah membuat Content Type "perfumes" di Contentful dashboard Anda.
            </p>
          </div>
        ) : (
          <div className="products-grid">
            {products.map((product, index) => {
              const fields = product.fields || {};
              const name = fields.name || 'Produk';
              const rawDescription = fields.description || '';
              const description = extractTextFromRichText(rawDescription);
              const price = formatPrice(fields.price);
              const image = fields.image || null;

              return (
                <div
                  key={product.sys?.id || index}
                  className="product-card"
                  onClick={() => handleProductClick({ name, description, price, image })}
                >
                  <div className="product-image-wrapper">
                    {image ? (
                      <img
                        src={image}
                        alt={name}
                        className="product-image"
                      />
                    ) : (
                      <div className="product-image-placeholder">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                          <rect x="50" y="40" width="100" height="120" fill="#E6D7C3" rx="10"/>
                          <rect x="60" y="30" width="80" height="15" fill="#D4AF37" rx="3"/>
                          <circle cx="100" cy="100" r="30" fill="none" stroke="#8B6F47" strokeWidth="2"/>
                        </svg>
                      </div>
                    )}
                    <div className="product-overlay">
                      <button className="btn btn-sm btn-primary">Lihat Detail</button>
                    </div>
                  </div>
                  <div className="product-info">
                    <h3>{name}</h3>
                    <p className="product-desc">{description.substring(0, 60)}...</p>
                    <div className="product-footer">
                      <span className="price">{price}</span>
                      <button className="btn btn-sm btn-outline">Beli</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {selectedProduct && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>✕</button>
              <div className="modal-body">
                {selectedProduct.image && (
                  <img src={selectedProduct.image} alt={selectedProduct.name} />
                )}
                <div className="modal-info">
                  <h2>{selectedProduct.name}</h2>
                  <p>{selectedProduct.description}</p>
                  <div className="modal-price">
                    <span className="price-label">Harga:</span>
                    <span className="price-value">{selectedProduct.price}</span>
                  </div>
                  <button className="btn btn-primary btn-lg">
                    Tambah ke Keranjang
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductList;
