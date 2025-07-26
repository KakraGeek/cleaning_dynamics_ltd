import Image from "next/image";

export default function HomePage() {
  const services = [
    {
      title: "Domestic & Industrial Cleaning",
      description: "Tailored cleaning services for homes, offices, warehouses, schools, and industrial sites. Includes scheduled janitorial support, deep cleaning, carpet care, upholstery, floor polishing, and more."
    },
    {
      title: "Post-Construction Cleaning",
      description: "Specialized services to remove construction debris, dust, paint, and stains from newly built or renovated properties—ensuring they're move-in ready."
    },
    {
      title: "Fumigation & Pest Control",
      description: "Safe, Ghana Standards Board–approved solutions for controlling rodents, termites, cockroaches, mosquitoes, and other pests. Includes preventive maintenance contracts for homes and businesses."
    },
    {
      title: "Estate Management",
      description: "Full-service management of residential and commercial properties. Includes cleaning, security coordination, landscaping, waste removal, and minor maintenance."
    },
    {
      title: "Solid & Liquid Waste Management",
      description: "Environmentally responsible collection and disposal services for residential, commercial, and industrial clients. We handle septic tank evacuation, garbage collection, and recycling support."
    },
    {
      title: "Landscape Design & Maintenance",
      description: "From turf installation to garden design, our team creates and maintains beautiful, eco-friendly outdoor spaces for homes, institutions, and estates."
    }
  ];

  const whyChooseUs = [
    "Over two decades of industry experience",
    "Operations across all 16 regions of Ghana",
    "Professionally trained and certified staff",
    "Ghana Standards Board–approved chemicals only",
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
            src="/Images/hero1.jpg"
            alt="Cleaning Dynamics team at work"
            width={1920}
            height={800}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 lg:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#212121] text-center mb-8 lg:mb-12">Key Services</h2>
          
          {/* Services with Central Image Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-center max-w-7xl mx-auto py-8 lg:py-16">
            {/* Mobile Layout - Sequential Cards */}
            <div className="lg:hidden space-y-6">
              {/* Cards 1, 2, 3 above image */}
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-8 border-l-[#8BC34A]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#8BC34A] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#212121] mb-2 uppercase tracking-wide">{services[0].title}</h3>
                    <p className="text-[#212121] text-sm leading-relaxed">{services[0].description}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-8 border-l-[#8BC34A]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#8BC34A] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#212121] mb-2 uppercase tracking-wide">{services[1].title}</h3>
                    <p className="text-[#212121] text-sm leading-relaxed">{services[1].description}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-8 border-l-[#8BC34A]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#8BC34A] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#212121] mb-2 uppercase tracking-wide">{services[2].title}</h3>
                    <p className="text-[#212121] text-sm leading-relaxed">{services[2].description}</p>
                  </div>
                </div>
              </div>
            </div>

                          {/* Central Image - Mobile */}
              <div className="lg:hidden flex justify-center">
                <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl">
                  <Image
                    src="/Images/circular.jpg"
                    alt="Cleaning Dynamics team at work"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            {/* Cards 4, 5, 6 below image - Mobile */}
            <div className="lg:hidden space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-8 border-l-[#8BC34A]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#8BC34A] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#212121] mb-2 uppercase tracking-wide">{services[3].title}</h3>
                    <p className="text-[#212121] text-sm leading-relaxed">{services[3].description}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-8 border-l-[#8BC34A]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#8BC34A] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#212121] mb-2 uppercase tracking-wide">{services[4].title}</h3>
                    <p className="text-[#212121] text-sm leading-relaxed">{services[4].description}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-8 border-l-[#8BC34A]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#8BC34A] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl font-bold">6</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#212121] mb-2 uppercase tracking-wide">{services[5].title}</h3>
                    <p className="text-[#212121] text-sm leading-relaxed">{services[5].description}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Layout - Left Side - Services 6 & 5 (stacked) */}
            <div className="hidden lg:block space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-8 border-l-[#8BC34A] relative overflow-hidden">
                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg"></div>
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-12 h-12 bg-[#8BC34A] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl font-bold">6</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#212121] mb-2 uppercase tracking-wide">{services[5].title}</h3>
                    <p className="text-[#212121] text-sm leading-relaxed">{services[5].description}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-8 border-l-[#8BC34A] relative overflow-hidden">
                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg"></div>
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-12 h-12 bg-[#8BC34A] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#212121] mb-2 uppercase tracking-wide">{services[4].title}</h3>
                    <p className="text-[#212121] text-sm leading-relaxed">{services[4].description}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Desktop Layout - Central Column - Image and Top/Bottom Cards */}
            <div className="hidden lg:flex flex-col items-center space-y-16">
              {/* Top Card - Service 1 */}
              <div className="w-80">
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-8 border-l-[#8BC34A] relative overflow-hidden">
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg"></div>
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-12 h-12 bg-[#8BC34A] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#212121] mb-2 uppercase tracking-wide">{services[0].title}</h3>
                      <p className="text-[#212121] text-sm leading-relaxed">{services[0].description}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Central Circular Image */}
              <div className="w-96 h-96 rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="/Images/circular.jpg"
                  alt="Cleaning Dynamics team at work"
                  width={384}
                  height={384}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Bottom Card - Service 4 */}
              <div className="w-80">
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-8 border-l-[#8BC34A] relative overflow-hidden">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg"></div>
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-12 h-12 bg-[#8BC34A] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#212121] mb-2 uppercase tracking-wide">{services[3].title}</h3>
                      <p className="text-[#212121] text-sm leading-relaxed">{services[3].description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Desktop Layout - Right Side - Services 2 & 3 (stacked) */}
            <div className="hidden lg:block space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-8 border-l-[#8BC34A] relative overflow-hidden">
                <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg"></div>
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-12 h-12 bg-[#8BC34A] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#212121] mb-2 uppercase tracking-wide">{services[1].title}</h3>
                    <p className="text-[#212121] text-sm leading-relaxed">{services[1].description}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-8 border-l-[#8BC34A] relative overflow-hidden">
                <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg"></div>
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-12 h-12 bg-[#8BC34A] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#212121] mb-2 uppercase tracking-wide">{services[2].title}</h3>
                    <p className="text-[#212121] text-sm leading-relaxed">{services[2].description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#F5F5F5] py-8 lg:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#212121] mb-6 lg:mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 gap-4 lg:gap-6">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="flex items-center gap-3 w-full max-w-xl mx-auto text-left"
              >
                <span className="text-2xl min-w-[2em] flex justify-center">✅</span>
                <p className="text-lg text-[#212121]">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8 lg:py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#212121] mb-6 lg:mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div>
              <h3 className="text-xl font-semibold text-[#8BC34A] mb-2">Call or WhatsApp</h3>
              <p className="text-lg text-[#212121]">0244369985</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#8BC34A] mb-2">Email</h3>
              <a 
                href="mailto:cleaning_dynamics@yahoo.com" 
                className="text-lg text-blue-600 hover:text-[#8BC34A] transition-colors underline"
              >
                cleaning_dynamics@yahoo.com
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#8BC34A] mb-2">Service Coverage</h3>
              <p className="text-lg text-[#212121]">Nationwide</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 