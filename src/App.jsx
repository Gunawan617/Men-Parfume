import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Why from './components/Why';
import ProductList from './components/ProductList';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/global.css';

function App() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Why />
        <ProductList />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
