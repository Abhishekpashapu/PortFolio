import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/ui/marquee";
import { About } from "@/components/sections/about";
import { Journey } from "@/components/sections/journey";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Specialties } from "@/components/sections/specialties";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";
import { CharacterStage } from "@/components/character/character-stage";
import { marqueeItems } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <div className="relative xl:pr-[300px]">
        <Hero />
        <Marquee items={marqueeItems} />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Specialties />
        <Education />
        <Contact />
      </div>
      <CharacterStage />
    </>
  );
}
