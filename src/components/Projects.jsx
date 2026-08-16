import SectionHeading from './SectionHeading'
import { projects } from '../data/portfolio'

function Projects() {
  return <section className="bg-[#f6f8fb] py-20 sm:py-28" id="projects" aria-labelledby="projects-title"><div className="shell"><SectionHeading eyebrow="03 / Project index" title={<>Good sites worth<br />studying.</>}><p>A selected directory of digital experiences across commerce, tools, travel, and culture.</p></SectionHeading><div className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">{projects.map((project) => <ProjectCard key={project.name} project={project} />)}</div></div></section>
}

function ProjectCard({ project }) {
  return <article><a className="group relative block aspect-[4/3] overflow-hidden bg-[#172033]" href={project.url} target="_blank" rel="noreferrer"><img className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105" src={project.previewUrl} alt={`${project.name} homepage preview`} loading="lazy" /><span className="absolute right-3 top-3 bg-[#f6f8fb] px-3 py-2 font-mono text-xs opacity-0 transition group-hover:opacity-100">Open ↗</span></a><p className="mt-4 font-mono text-xs uppercase tracking-wider text-[#e65d3b]">{project.category}</p><h3 className="mt-2 text-2xl font-bold">{project.name}</h3><a className="mt-3 inline-block border-b border-[#172033] pb-0.5 font-mono text-xs font-medium hover:border-[#e65d3b] hover:text-[#e65d3b]" href={project.url} target="_blank" rel="noreferrer">Visit live website →</a></article>
}

export default Projects