import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

function getMarkdownContent(slug: string) {
  const filePath = path.join(process.cwd(), "..", "Content Pages", `${slug}.md`);
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
    <main className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-[#212121] text-center mb-12">Management Team</h1>
        
                            {/* Team Members Grid */}
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {teamMembers.slice(1).map((member, index) => {
            // Clean the name by removing any markdown formatting and hash signs
            const cleanName = member.title.replace(/^#+\s*/, '').replace(/\*\*/g, '').trim();
            const initials = cleanName.split(' ').map(name => name.charAt(0)).slice(0, 2).join('');
            
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-l-8 border-l-[#8BC34A] team-card">
                <div className="text-center mb-4">
                  {/* Placeholder for profile photo */}
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-[#8BC34A] to-[#00BCD4] rounded-full flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">
                      {initials}
                    </span>
                  </div>
                </div>
                <div className="prose prose-sm max-w-none text-[#212121] prose-p:text-[#212121] mt-4">
                  <MDXRemote source={member.content} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
} 