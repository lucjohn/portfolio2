import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Kpop Review Website",
    description: "Music review website using React and TailWindCSS",
    image: "/assets/piplup.png",
    tags: ["React", "HTML", "CSS"],
    demoURL: "#",
    githubURL: "#",
  },

  {
    id: 1,
    title: "Annie Sweet Treats",
    description: "Fictional Bakery Landing Page",
    image: "/assets/psyduck.png",
    tags: ["React"],
    demoURL: "#",
    githubURL: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl font-bold">
        <h2>
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="font-light mb-12 max-2-2xl">
          Here are some of my best projects!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover relative pb-16"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-4">
                <div className="flex flex-wrap justify-center gap-4 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 border text-xs font-medium rounded-2xl bg-gray-900 text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm font-light mb-4">{project.description}</p>
              </div>

              <div className="absolute bottom-4 left-4 flex space-x-3">
                <a
                  href={project.demoURL}
                  target="_blank"
                  className="p-2 hover:bg-gray-100 rounded hover:text-primary transition-colors"
                >
                  <ExternalLink size={18} />
                </a>
                <a
                  href={project.githubURL}
                  target="_blank"
                  className="p-2 hover:bg-gray-100 rounded hover:text-primary transition-colors"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
