import { Github } from "lucide-react";

const projects =[
  {
    id: 1,
    title: "SIMS",
    description: "A capstone project that centralizes office supply inventory, requests, and records for schools and organizations.",
    imageUrl: "/projects/sims.png",
    tags: ["PHP", "MySQL", "HTML", "CSS"],
    projectUrl: "https://github.com/jan2022305846/SIMS"
  },
];
export const ProjectsSection = ()  =>{
  return (
    <section 
      id="projects"
      className="py-24 px-4 relative"
    >
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured
          {" "}
          <span className="text-primary">
            Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div 
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover "
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-colors duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4 ">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

              <h3 className="text-xl font-semibold mb-2 ">
                  {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a 
                    href={project.projectUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20}/>
                  </a>
                </div>
               </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}