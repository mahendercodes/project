import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';

export const Footer = () => {
  // Quick Links handlers
  const handleMoviesClick = () => {
    console.log('Navigating to Movies...');
    // Scroll to movies section or navigate to movies page
    const moviesSection = document.getElementById('movies');
    if (moviesSection) {
      moviesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTheatersClick = () => {
    console.log('Opening Theaters page...');
    alert('🎭 Theaters feature coming soon! We\'re working on adding theater locations near you.');
  };

  const handleMyBookingsClick = () => {
    console.log('Opening My Bookings...');
    alert('📋 My Bookings feature coming soon! Track all your movie reservations here.');
  };

  const handleOffersClick = () => {
    console.log('Opening Offers page...');
    alert('🎁 Special Offers available! \n\n• 20% off on weekend bookings\n• Buy 2 Get 1 Free on group bookings\n• Student discounts available');
  };

  const handleGiftCardsClick = () => {
    console.log('Opening Gift Cards...');
    alert('💳 Gift Cards coming soon! Perfect for movie lovers - give the gift of cinema!');
  };

  // Support section handlers
  const handleHelpCenterClick = () => {
    console.log('Opening Help Center...');
    alert('❓ Help Center\n\nFor immediate assistance:\n• Check our FAQ section\n• Contact support via chat\n• Email: support@grabaseat.com');
  };

  const handleContactUsClick = () => {
    console.log('Opening Contact Us...');
    const contactInfo = `📞 Contact GrabASeat Support\n\n` +
      `📧 Email: support@grabaseat.com\n` +
      `📱 Phone: +1 (555) 123-4567\n` +
      `📍 Address: 123 Cinema Street, Movie City, MC 12345\n\n` +
      `Business Hours: 9 AM - 11 PM (All days)`;
    alert(contactInfo);
  };

  const handleRefundPolicyClick = () => {
    console.log('Opening Refund Policy...');
    const refundPolicy = `💰 Refund Policy\n\n` +
      `• Cancellation allowed up to 2 hours before showtime\n` +
      `• 100% refund for technical issues\n` +
      `• Processing time: 3-5 business days\n` +
      `• Convenience fee is non-refundable`;
    alert(refundPolicy);
  };

  const handleTermsClick = () => {
    console.log('Opening Terms of Service...');
    const terms = `📋 Terms of Service\n\n` +
      `• Must be 18+ to book tickets\n` +
      `• Valid ID required at theater\n` +
      `• No outside food/drinks policy\n` +
      `• Respectful behavior required\n` +
      `• Subject to theater rules`;
    alert(terms);
  };

  const handlePrivacyPolicyClick = () => {
    console.log('Opening Privacy Policy...');
    const privacy = `🔒 Privacy Policy\n\n` +
      `• Your data is encrypted and secure\n` +
      `• No sharing with third parties\n` +
      `• Cookies used for better experience\n` +
      `• You control your data preferences\n` +
      `• GDPR compliant`;
    alert(privacy);
  };

  // Social media handlers
  const handleSocialClick = (platform: string) => {
    console.log(`Opening ${platform}...`);
    alert(`🌐 Follow us on ${platform.charAt(0).toUpperCase() + platform.slice(1)}!\n\nConnect with GrabASeat for latest updates, movie news, and exclusive offers.`);
  };

  // Contact action handlers
  const handleEmailClick = () => {
    window.location.href = 'mailto:support@grabaseat.com?subject=GrabASeat Support Request';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+15551234567';
  };

  const handleAddressClick = () => {
    const address = '123 Cinema Street, Movie City, MC 12345';
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🎬</span>
              <h3 className="text-xl font-bold text-cinema-gold">GrabASeat</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Your premier destination for online movie ticket booking. Experience the best seats in town with GrabASeat.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => handleSocialClick('facebook')} 
                className="text-gray-400 hover:text-cinema-gold transition-colors focus:outline-none focus:ring-2 focus:ring-cinema-gold rounded"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialClick('twitter')} 
                className="text-gray-400 hover:text-cinema-gold transition-colors focus:outline-none focus:ring-2 focus:ring-cinema-gold rounded"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialClick('instagram')} 
                className="text-gray-400 hover:text-cinema-gold transition-colors focus:outline-none focus:ring-2 focus:ring-cinema-gold rounded"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={handleMoviesClick}
                  className="text-gray-300 hover:text-cinema-gold transition-colors text-left focus:outline-none focus:ring-2 focus:ring-cinema-gold rounded px-1"
                >
                  Movies
                </button>
              </li>
              <li>
                <button 
                  onClick={handleTheatersClick}
                  className="text-gray-300 hover:text-cinema-gold transition-colors text-left focus:outline-none focus:ring-2 focus:ring-cinema-gold rounded px-1"
                >
                  Theaters
                </button>
              </li>
              <li>
                <button 
                  onClick={handleMyBookingsClick}
                  className="text-gray-300 hover:text-cinema-gold transition-colors text-left focus:outline-none focus:ring-2 focus:ring-cinema-gold rounded px-1"
                >
                  My Bookings
                </button>
              </li>
              <li>
                <button 
                  onClick={handleOffersClick}
                  className="text-gray-300 hover:text-cinema-gold transition-colors text-left focus:outline-none focus:ring-2 focus:ring-cinema-gold rounded px-1"
                >
                  Offers
                </button>
              </li>
              <li>
                <button 
                  onClick={handleGiftCardsClick}
                  className="text-gray-300 hover:text-cinema-gold transition-colors text-left focus:outline-none focus:ring-2 focus:ring-cinema-gold rounded px-1"
                >
                  Gift Cards
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={handleHelpCenterClick}
                  className="text-gray-300 hover:text-cinema-gold transition-colors text-left focus:outline-none focus:ring-2 focus:ring-cinema-gold rounded px-1"
                >
                  Help Center
                </button>
              </li>
              <li>
                <button 
                  onClick={handleContactUsClick}
                  className="text-gray-300 hover:text-cinema-gold transition-colors text-left focus:outline-none focus:ring-2 focus:ring-cinema-gold rounded px-1"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button 
                  onClick={handleRefundPolicyClick}
                  className="text-gray-300 hover:text-cinema-gold transition-colors text-left focus:outline-none focus:ring-2 focus:ring-cinema-gold rounded px-1"
                >
                  Refund Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={handleTermsClick}
                  className="text-gray-300 hover:text-cinema-gold transition-colors text-left focus:outline-none focus:ring-2 focus:ring-cinema-gold rounded px-1"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button 
                  onClick={handlePrivacyPolicyClick}
                  className="text-gray-300 hover:text-cinema-gold transition-colors text-left focus:outline-none focus:ring-2 focus:ring-cinema-gold rounded px-1"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <button 
                onClick={handleEmailClick}
                className="flex items-center space-x-2 text-left focus:outline-none focus:ring-2 focus:ring-cinema-gold rounded px-1 hover:text-cinema-gold transition-colors"
              >
                <Mail className="w-4 h-4 text-cinema-gold" />
                <span className="text-gray-300 hover:text-cinema-gold transition-colors">support@grabaseat.com</span>
              </button>
              <button 
                onClick={handlePhoneClick}
                className="flex items-center space-x-2 text-left focus:outline-none focus:ring-2 focus:ring-cinema-gold rounded px-1 hover:text-cinema-gold transition-colors"
              >
                <Phone className="w-4 h-4 text-cinema-gold" />
                <span className="text-gray-300 hover:text-cinema-gold transition-colors">+1 (555) 123-4567</span>
              </button>
              <button 
                onClick={handleAddressClick}
                className="flex items-center space-x-2 text-left focus:outline-none focus:ring-2 focus:ring-cinema-gold rounded px-1 hover:text-cinema-gold transition-colors"
              >
                <MapPin className="w-4 h-4 text-cinema-gold" />
                <span className="text-gray-300 hover:text-cinema-gold transition-colors">123 Cinema Street, Movie City, MC 12345</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 GrabASeat. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for movie lovers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
