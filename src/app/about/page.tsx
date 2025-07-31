import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CDL - About Us",
  description: "Learn about Cleaning Dynamics Ltd - Ghana's leading cleaning and environmental services provider. Over 20 years of experience serving homes, offices, and industries across all 16 regions of Ghana.",
  keywords: "about cleaning dynamics, cleaning company Ghana, environmental services Ghana, professional cleaning team, cleaning business Ghana, trusted cleaning services, cleaning contractor Ghana, cleaning service provider",
  openGraph: {
    title: "CDL - About Us",
    description: "Learn about Cleaning Dynamics Ltd - Ghana's leading cleaning and environmental services provider. Over 20 years of experience serving homes, offices, and industries across all 16 regions of Ghana.",
    type: "website",
    locale: "en_US",
    siteName: "Cleaning Dynamics Ltd",
    images: [
      {
        url: "/Images/clean_dyn_logo2.jpg",
        width: 1200,
        height: 630,
        alt: "About Cleaning Dynamics Ltd - Professional Cleaning Services Ghana"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "CDL - About Us",
    description: "Learn about Cleaning Dynamics Ltd - Ghana's leading cleaning and environmental services provider.",
    images: ["/Images/clean_dyn_logo2.jpg"]
  },
  alternates: {
    canonical: "https://cleaningdynamics.com/about"
  }
};

function getMarkdownContent(slug: string) {
  const filePath = path.join(process.cwd(), "src", "data", `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContent);
  return content;
}

function parseMarkdownSections(content: string) {
  // Split by --- and map to title/content
  const sections = content.split('---').filter(section => section.trim());
  // Find sections by their headings
  const getSection = (title: string) => sections.find(s => s.toLowerCase().includes(title.toLowerCase())) || '';
  return [
    { title: 'Who We Are', content: getSection('Who We Are'), icon: '🏢', color: 'from-[#8BC34A] to-[#00BCD4]' },
    { title: 'Our Clients', content: getSection('Our Clients'), icon: '🤝', color: 'from-[#00BCD4] to-[#8BC34A]' },
    { title: 'Our Corporate Goals', content: getSection('Corporate Goals'), icon: '🎯', color: 'from-[#8BC34A] to-[#00BCD4]' }
  ];
}

export default function AboutPage() {
  const aboutContent = getMarkdownContent("about_us_cleaning_dynamics");
  const sections = parseMarkdownSections(aboutContent);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#212121] mb-4">About Cleaning Dynamics</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in professional cleaning and environmental management services across Ghana since 2000.
          </p>
        </div>

        {/* Enhanced About Sections Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {sections.slice(0, 2).map((section, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
              {/* Card Header with Gradient */}
              <div className={`bg-gradient-to-r ${section.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="text-4xl">{section.icon}</div>
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-8">
                <div className="prose prose-lg leading-relaxed max-w-none text-[#212121] prose-h2:text-[#8BC34A] prose-h2:text-2xl prose-h2:font-bold prose-h3:text-[#8BC34A] prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3 prose-h3:border-b prose-h3:border-[#8BC34A] prose-h3:pb-2 prose-p:text-[#212121] prose-p:leading-relaxed prose-strong:text-[#8BC34A] prose-ul:text-[#212121] prose-li:text-[#212121] prose-li:my-2 [&>h3]:text-[#8BC34A] [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3 [&>h3]:border-b [&>h3]:border-[#8BC34A] [&>h3]:pb-2">
                  <MDXRemote source={section.content} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Corporate Goals - Full Width */}
        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
          {/* Card Header with Gradient */}
          <div className={`bg-gradient-to-r ${sections[2].color} p-8 text-white relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="flex items-center gap-6 relative z-10">
              <div className="text-5xl">{sections[2].icon}</div>
              <div>
                <h2 className="text-3xl font-bold mb-2">{sections[2].title}</h2>
                <p className="text-lg opacity-90">Driving excellence in environmental management</p>
              </div>
            </div>
          </div>
          
          {/* Card Content */}
          <div className="p-8">
            <div className="prose prose-lg leading-relaxed max-w-none text-[#212121] prose-h2:text-[#8BC34A] prose-h2:text-2xl prose-h2:font-bold prose-h3:text-[#8BC34A] prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3 prose-h3:border-b prose-h3:border-[#8BC34A] prose-h3:pb-2 prose-p:text-[#212121] prose-p:leading-relaxed prose-strong:text-[#8BC34A] prose-ul:text-[#212121] prose-li:text-[#212121] prose-li:my-2 [&>h3]:text-[#8BC34A] [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3 [&>h3]:border-b [&>h3]:border-[#8BC34A] [&>h3]:pb-2">
              <MDXRemote source={sections[2].content} />
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#8BC34A] to-[#00BCD4] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Work With Us?</h3>
            <p className="text-lg mb-6 opacity-90">
              Experience the difference that professional cleaning services can make for your business or home.
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
        </div>
      </div>
    </main>
  );
} 