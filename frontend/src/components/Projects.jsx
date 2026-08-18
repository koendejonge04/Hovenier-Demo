import { MapPin } from "lucide-react";
import { site } from "@/config/site";
import { Reveal, SectionHeading } from "@/components/shared";

const Projects = () => {
  const { projects } = site;

  return (
    <section
      id="projecten"
      data-testid="projects-section"
      className="scroll-mt-24 bg-sand py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading
          eyebrow={projects.eyebrow}
          title={projects.title}
          intro={projects.intro}
        />
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.items.map((project, i) => (
            <Reveal
              key={project.title}
              delay={i * 0.08}
              className={i === 0 ? "lg:row-span-2" : ""}
            >
              <article
                data-testid={`project-card-${i}`}
                className={`group relative h-full min-h-[320px] overflow-hidden rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] ${
                  i === 0 ? "lg:min-h-[560px]" : ""
                }`}
              >
                <img
                  src={project.image}
                  alt={`${project.title} — ${project.location}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/75">
                    <MapPin className="h-3.5 w-3.5 text-clay" aria-hidden="true" />
                    {project.location}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-white md:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80">
                    {project.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
