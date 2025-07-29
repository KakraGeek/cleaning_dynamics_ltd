import Image from "next/image";

export default function HomePage() {
  const services = [
    {
      title: "Domestic & Industrial Cleaning",
      description: "Tailored cleaning services for homes, offices, warehouses, schools, and industrial sites. Includes scheduled janitorial support, deep cleaning, carpet care, upholstery, floor polishing, and more.",
      image: "/Images/Domestic and Industrial Cleaning_NEW.png",
      icon: "🏠"
    },
    {
      title: "Post-Construction Cleaning",
      description: "Specialized services to remove construction debris, dust, paint, and stains from newly built or renovated properties—ensuring they're move-in ready.",
      image: "/Images/post-construction cleaning_NEW.png",
      icon: "🏗️"
    },
    {
      title: "Fumigation & Pest Control",
      description: "Safe, Ghana Standards Board–approved solutions for controlling rodents, termites, cockroaches, mosquitoes, and other pests. Includes preventive maintenance contracts for homes and businesses.",
      image: "/Images/Fumigation and Pest Control_NEW1.png",
      icon: "🦟"
    },
    {
      title: "Facilities Management",
      description: "Full-service management of residential and commercial properties. Includes cleaning, security coordination, landscaping, waste removal, and minor maintenance.",
      image: "/Images/Facilities Management-NEW2.png",
      icon: "🏢"
    },
    {
      title: "Solid & Liquid Waste Management",
      description: "Environmentally responsible collection and disposal services for residential, commercial, and industrial clients. We handle septic tank evacuation, garbage collection, and recycling support.",
      image: "/Images/Solid & Liquid Waste Management_NEW.png",
      icon: "♻️"
    },
    {
      title: "Landscape Design & Maintenance",
      description: "From turf installation to garden design, our team creates and maintains beautiful, eco-friendly outdoor spaces for homes, institutions, and estates.",
      image: "/Images/Landscape Design & Maintenance_NEW.png",
      icon: "🌿"
    }
  ];

  const whyChooseUs = [
    "Over two decades of industry experience",
    "Operations across all 16 regions of Ghana",
    "Professionally trained and certified staff",
    "Ghana Standards Authority-approved chemicals only",
    "Competitive pricing and guaranteed satisfaction"
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#8BC34A] to-[#00BCD4] text-white py-12 lg:py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto mb-6 lg:mb-8">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">Your Trusted Cleaning & Environmental Management Partner in Ghana</h1>
          <p className="text-base lg:text-lg mb-6 lg:mb-8">
            Delivering premium janitorial, pest control, estate management, and landscaping services across all 16 regions of Ghana since 2000.
          </p>
        </div>
        <div className="w-full">
          <Image
            src="/Images/Hero Image_Newest1.png"
            alt="Cleaning Dynamics team at work"
            width={1920}
            height={800}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#212121] text-center mb-12">Our Premium Services</h2>
          
          {/* Enhanced Service Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                {/* Service Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Icon overlay */}
                  <div className="absolute bottom-0 right-0 p-4">
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                </div>
                
                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#8BC34A] mb-3 group-hover:text-[#00BCD4] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#212121] leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#212121] text-center mb-12">Why Choose Cleaning Dynamics?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-[#8BC34A]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#8BC34A] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg font-bold">✓</span>
                  </div>
                  <p className="text-[#212121] font-medium">{reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#8BC34A] to-[#00BCD4] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Premium Cleaning Services?</h2>
          <p className="text-lg mb-8">
            Get in touch with us today for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-[#8BC34A] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Quote
            </a>
            <a 
              href="tel:+233244369985" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#8BC34A] transition-colors"
            >
              Call Now: 0244369985
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 