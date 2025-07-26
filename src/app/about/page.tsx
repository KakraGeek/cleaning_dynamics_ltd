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

function parseMarkdownSections(content: string) {
  // Split by --- and map to title/content
  const sections = content.split('---').filter(section => section.trim());
  // Find sections by their headings
  const getSection = (title: string) => sections.find(s => s.toLowerCase().includes(title.toLowerCase())) || '';
  return [
    { title: 'Who We Are', content: getSection('Who We Are') },
    { title: 'Our Clients', content: getSection('Our Clients') },
    { title: 'Our Corporate Goals', content: getSection('Corporate Goals') }
  ];
}

export default function AboutPage() {
  const aboutContent = getMarkdownContent("about_us_cleaning_dynamics");
  const sections = parseMarkdownSections(aboutContent);

  return (
    <main className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#212121] text-center mb-12">About Us</h1>
        {/* About Sections Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {sections.slice(0, 2).map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-4 border-l-8 border-l-[#8BC34A]">
              <h2 className="text-2xl font-bold text-[#8BC34A] mb-4">{section.title}</h2>
              <div className="prose prose-lg leading-relaxed max-w-none text-[#212121] prose-h2:text-[#8BC34A] prose-h2:text-2xl prose-h2:font-bold prose-h3:text-[#8BC34A] prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-4 prose-h3:mb-2 prose-p:text-[#212121] prose-strong:text-[#8BC34A] prose-ul:text-[#212121] prose-li:text-[#212121]">
                <MDXRemote source={section.content} />
              </div>
            </div>
          ))}
        </div>
        {/* Corporate Goals - Full Width */}
        <div className="mt-10">
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-4 border-l-8 border-l-[#8BC34A] corporate-goals-card">
            <h2 className="text-2xl font-bold text-[#8BC34A] mb-4">{sections[2].title}</h2>
            <div className="prose prose-lg leading-relaxed max-w-none text-[#212121] prose-h2:text-[#8BC34A] prose-h2:text-2xl prose-h2:font-bold prose-p:text-[#212121] prose-strong:text-[#8BC34A] prose-ul:text-[#212121] prose-li:text-[#212121]">
              <MDXRemote source={sections[2].content} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 