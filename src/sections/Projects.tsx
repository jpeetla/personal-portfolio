import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    description: "Insert description...",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    description: "Insert description...",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    description: "Insert description...",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16">
      <div>
        <h2 className="font-serif text-3xl text-center mt-6">
          Featured Projects
        </h2>
        <div className="mt-10 flex flex-col gap-20 mx-10">
          {portfolioProjects.map((project) => {
            return (
              <div
                key={project.title}
                className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:-z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 p-8"
              >
                <div className="flex">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 font-bold uppercase tracking-widest text-3xl text-transparent bg-clip-text">
                    <span>{project.title}</span>
                  </div>
                </div>
                <div className="font-serif text-l mt-2">
                  <span>{project.description}</span>
                </div>
                <hr className="border-t-2 border-white/5 mt-4" />
                <ul className="flex flex-col gap-4 mt-4">
                  {project.results.map((result) => {
                    return (
                      <li className="flex gap-2 text-sm text-white/50">
                        <CheckCircleIcon className="size-5" />
                        <span>{result.title}</span>;
                      </li>
                    );
                  })}
                </ul>
                <a href={project.link}>
                  <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                    <span>View Project</span>
                    <ArrowUpRight className="size-4" />
                  </button>
                </a>
                {/* <Image src={project.image} alt={project.title} /> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
