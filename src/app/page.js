
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsPreview from '../components/ProjectsPreview';




export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <HeroSection />

      {/* Skills Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">

          <SkillsSection showAll={false} />

        </div>
      </section>

      {/* Projects Preview */}
      <ProjectsPreview />
    </div>
  );
}