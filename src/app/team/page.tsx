import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

function getMarkdownContent(slug: string) {
  const filePath = path.join(process.cwd(), "src", "data", `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContent);
  return content;
}

function parseTeamMembers(content: string) {
  const sections = content.split('---').filter(section => section.trim());
  return sections.map(section => {
    const lines = section.trim().split('\n');
    // Extract the name from the first line that contains a name
    const nameLine = lines.find(line => line.includes('**') && !line.includes('Management Team'));
    const name = nameLine ? nameLine.replace(/\*\*/g, '').trim() : 'Unknown';
    return { title: name, content: section.trim() };
  });
}

export default function TeamPage() {
  const teamContent = getMarkdownContent("management_team_cleaning_dynamics");
  const teamMembers = parseTeamMembers(teamContent);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#212121] mb-4">Our Management Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the experienced professionals who lead Cleaning Dynamics Ltd and drive our commitment to excellence in environmental management.
          </p>
        </div>
        
        {/* Enhanced Team Members Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.slice(1).map((member, index) => {
            // Clean the name by removing any markdown formatting and hash signs
            const cleanName = member.title.replace(/^#+\s*/, '').replace(/\*\*/g, '').trim();
            const initials = cleanName.split(' ').map(name => name.charAt(0)).slice(0, 2).join('');
            
            return (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                {/* Enhanced Avatar Section */}
                <div className="relative bg-gradient-to-r from-[#8BC34A] to-[#00BCD4] p-8 text-center">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                  
                  {/* Enhanced Avatar */}
                  <div className="relative z-10">
                    <div className="w-40 h-40 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30 shadow-xl">
                      <span className="text-white text-4xl font-bold">
                        {initials}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">{cleanName}</h2>
                    <div className="w-16 h-1 bg-white/50 rounded-full mx-auto"></div>
                  </div>
                </div>
                
                {/* Enhanced Content Section */}
                <div className="p-8">
                  <div className="prose prose-lg leading-relaxed max-w-none text-[#212121] prose-h2:text-[#8BC34A] prose-h2:text-xl prose-h2:font-bold prose-h3:text-[#8BC34A] prose-h3:text-lg prose-h3:font-semibold prose-h3:mt-4 prose-h3:mb-2 prose-p:text-[#212121] prose-p:leading-relaxed prose-p:my-3 prose-strong:text-[#8BC34A] prose-ul:text-[#212121] prose-li:text-[#212121] prose-li:my-2">
                    <MDXRemote source={member.content} />
                  </div>
                  

                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#8BC34A] to-[#00BCD4] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Work With Our Expert Team</h3>
            <p className="text-lg mb-6 opacity-90">
              Our experienced management team ensures every project meets the highest standards of quality and professionalism.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-[#8BC34A] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Our Team
              </a>
              <a 
                href="tel:+233244369985" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#8BC34A] transition-colors"
              >
                Call: 0244369985
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 