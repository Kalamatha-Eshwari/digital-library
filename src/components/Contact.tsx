'use client';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Link from 'next/link'
const Contact = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/contact.png)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for contrast */}
      <div className="container py-8 mx-auto text-white relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Digital Library</h1>
          <p className="text-lg">Your one-stop source for educational materials, research papers, and digital content.</p>
        </div>

        {/* Contact Info */}
        <div className="text-center mb-8">
          <p className="text-lg mb-2">You can reach us via:</p>
          <div className="flex justify-center gap-8 text-2xl">
            <a href="tel:+1234567890" className="text-accent hover:text-white">
              <FaPhoneAlt />
            </a>
            <a href="mailto:contact@example.com" className="text-accent hover:text-white">
              <FaEnvelope />
            </a>
            <a href="#" className="text-accent hover:text-white">
              <FaMapMarkerAlt />
            </a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center mb-8">
          <p className="text-lg mb-2">Follow us on Social Media:</p>
          <div className="flex justify-center gap-8 text-2xl">
            <a href="https://facebook.com" className="text-accent hover:text-white">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" className="text-accent hover:text-white">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" className="text-accent hover:text-white">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
