import { IconArrowUpRight, IconBrandGithub } from "@tabler/icons-react";
import AnimatedBorderButton from "@/components/AnimatedBorderButton"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Marketplace-style e-commerce platform built with Laravel REST API and React. Features product management, role-based access control, Midtrans payment integration, webhook processing, delayed seller payouts, and Typesense-powered search.",
    image: "/projects/e-commerce-project.png",
    tags: ["Laravel", "React", "PostgreSQL", "Redis", "Docker", "Midtrans", "Typesense"],
    link: "#",
    github: "https://github.com/rizqipratama25/E-commerce",
  },
  {
    title: "SKANEDA Information Platform API ",
    description:
      "Laravel REST API serving a multi-domain school information platform with news publishing, achievements, facilities, discussion forums, career opportunities, role-based authentication, Redis caching, and background job processing.",
    image: "/projects/school-website-project.png",
    tags: ["Laravel", "MySQL", "Redis"],
    link: "#",
    github: "https://github.com/rizqipratama25/skaneda-web-api",
  },
  {
    title: "Siminlab Inventory Lending Management System",
    description:
      "Inventory lending and asset tracking application built with Laravel. Supports item management, borrowing records, return tracking, and inventory monitoring workflows.",
    image: "/projects/siminlab-inventory-lending-management-system.png",
    tags: ["Laravel", "MySQL"],
    link: "#",
    github: "https://github.com/rizqipratama25/siminlab-inventory-lending-management-system",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-6 md:px-12 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">{" "} make an impact.</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <a href={project.github}>
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
                  {/* Overlay Links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                    <IconArrowUpRight className="w-5 h-5" />
                  </a> */}
                    <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                      <IconBrandGithub className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                    <IconArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">{project.tags.map((tag, tagIdx) => (
                    <span className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                  ))}</div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        {/* <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <IconArrowUpRight className="w-5 h-5"/>
          </AnimatedBorderButton>
        </div> */}
      </div>
    </section>
  )
}

export default Projects