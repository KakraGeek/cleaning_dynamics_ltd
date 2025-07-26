"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    contactMethod: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create email content
    const subject = `New Contact Form Submission - ${formData.serviceType || 'General Inquiry'}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service Type: ${formData.serviceType || 'Not specified'}
Preferred Contact Method: ${formData.contactMethod || 'Not specified'}

Message:
${formData.message}
    `.trim();
    
    // Create mailto link
    const mailtoLink = `mailto:cleaning_dynamics@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        contactMethod: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#212121] mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to experience premium cleaning services? Contact us today for a free consultation and quote.
          </p>
        </div>
        
        {/* Contact Information and Form Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Enhanced Contact Details */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-[#8BC34A] to-[#00BCD4] p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Contact Information</h2>
              <p className="text-lg opacity-90">We&apos;re here to help with all your cleaning needs</p>
            </div>
            
            <div className="p-8 space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-14 h-14 bg-gradient-to-r from-[#8BC34A] to-[#00BCD4] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-2xl">📞</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#212121] mb-2 text-lg">Call or WhatsApp</h3>
                  <p className="text-[#212121] text-lg font-semibold">0244369985</p>
                  <p className="text-gray-600 text-sm mt-1">Alternate: 0277003030</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-14 h-14 bg-gradient-to-r from-[#8BC34A] to-[#00BCD4] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-2xl">✉️</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[#212121] mb-2 text-lg">Email</h3>
                  <a 
                    href="mailto:cleaning_dynamics@yahoo.com" 
                    className="text-blue-600 hover:text-[#8BC34A] transition-colors font-semibold text-base sm:text-lg break-all block"
                  >
                    cleaning_dynamics@yahoo.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-14 h-14 bg-gradient-to-r from-[#8BC34A] to-[#00BCD4] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-2xl">🏢</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#212121] mb-2 text-lg">Office Address</h3>
                  <p className="text-[#212121] font-semibold">A5 GNATVILLE Close, Lakeside Ashaley Botwe, Accra</p>
                  <p className="text-gray-600 text-sm mt-1">GPS: GD-091-4169</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-14 h-14 bg-gradient-to-r from-[#8BC34A] to-[#00BCD4] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-2xl">🕒</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#212121] mb-2 text-lg">Operating Hours</h3>
                  <p className="text-[#212121] font-semibold">Monday to Saturday: 7:00 AM – 5:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-14 h-14 bg-gradient-to-r from-[#8BC34A] to-[#00BCD4] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-2xl">🌍</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#212121] mb-2 text-lg">Service Coverage</h3>
                  <p className="text-[#212121] font-semibold">Nationwide</p>
                  <p className="text-gray-600 text-sm mt-1">Dedicated and mobile service team</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-[#00BCD4] to-[#8BC34A] p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Send us a Message</h2>
              <p className="text-lg opacity-90">We&apos;ll get back to you within 24 hours</p>
            </div>
            
            <div className="p-8">
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl flex items-center gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <p className="font-semibold">Message Sent Successfully!</p>
                    <p className="text-sm">We&apos;ll get back to you soon.</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-[#212121] mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#8BC34A] focus:border-[#8BC34A] transition-all duration-300 text-lg"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-[#212121] mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#8BC34A] focus:border-[#8BC34A] transition-all duration-300 text-lg"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-[#212121] mb-3">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#8BC34A] focus:border-[#8BC34A] transition-all duration-300 text-lg"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-bold text-[#212121] mb-3">
                    Service Type
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#8BC34A] focus:border-[#8BC34A] transition-all duration-300 text-lg bg-white text-[#212121]"
                  >
                    <option value="" className="text-[#212121]">Select a service</option>
                    <option value="domestic-cleaning" className="text-[#212121]">Domestic & Industrial Cleaning</option>
                    <option value="post-construction" className="text-[#212121]">Post-Construction Cleaning</option>
                    <option value="pest-control" className="text-[#212121]">Fumigation & Pest Control</option>
                    <option value="estate-management" className="text-[#212121]">Estate Management</option>
                    <option value="waste-management" className="text-[#212121]">Solid & Liquid Waste Management</option>
                    <option value="landscaping" className="text-[#212121]">Landscape Design & Maintenance</option>
                    <option value="other" className="text-[#212121]">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="contactMethod" className="block text-sm font-bold text-[#212121] mb-3">
                    Preferred Contact Method
                  </label>
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#8BC34A] focus:border-[#8BC34A] transition-all duration-300 text-lg bg-white text-[#212121]"
                  >
                    <option value="" className="text-[#212121]">Select preferred method</option>
                    <option value="call" className="text-[#212121]">Call</option>
                    <option value="whatsapp" className="text-[#212121]">WhatsApp</option>
                    <option value="email" className="text-[#212121]">Email</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-[#212121] mb-3">
                    Message or Request Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#8BC34A] focus:border-[#8BC34A] transition-all duration-300 text-lg resize-none"
                    placeholder="Please describe your cleaning needs or any questions you have..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#8BC34A] to-[#00BCD4] text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-[#7CB342] hover:to-[#00ACC1] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 shadow-lg"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="animate-spin">⏳</span>
                      Sending Message...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      📤 Send Message
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Enhanced Google Maps Section */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-[#8BC34A] to-[#00BCD4] p-8 text-white">
            <h2 className="text-3xl font-bold mb-2">Our Location</h2>
            <p className="text-lg opacity-90">Visit us at our office in Accra</p>
          </div>
          
          <div className="p-8">
            <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31762.234672813942!2d-0.16321722212594492!3d5.672695591368432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sA5%20GNATVILLE%20Close%2C%20Lakeside%20Ashaley%20Botwe%2C%20Accra!5e0!3m2!1sen!2sus!4v1753542834878!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cleaning Dynamics Ltd Location"
                aria-label="Google Maps showing Cleaning Dynamics Ltd location"
              />
            </div>
            <div className="mt-6 text-center">
              <p className="text-lg font-semibold text-[#212121] mb-2">A5 GNATVILLE Close, Lakeside Ashaley Botwe, Accra</p>
              <p className="text-gray-600 mb-4">GPS: GD-091-4169</p>
              <a 
                href="https://maps.app.goo.gl/PGrhyoQHjiLzj1M7A?g_st=aw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[#8BC34A] hover:text-[#00BCD4] font-bold text-lg transition-colors"
              >
                <span className="text-2xl">📍</span>
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 