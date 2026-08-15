import SectionHeading from './SectionHeading'
import { expertiseGroups } from '../data/portfolio'

function Projects() {
  return <section className="bg-[#f6f8fb] py-20 sm:py-28" id="services" aria-labelledby="services-title"><div className="shell"><SectionHeading eyebrow="03 / Services" title={<>The work behind<br />a steady launch.</>}><p>Practical technical support from the first build through deployment, maintenance, and the next useful improvement.</p></SectionHeading><div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{expertiseGroups.map((service) => <ServiceCard key={service.title} service={service} />)}</div></div></section>
}

function ServiceCard({ service }) {
  return <article className="border-t border-[#172033]/15 pt-5"><h3 className="text-2xl font-bold">{service.title}</h3><p className="mt-4 leading-7 text-[#465064]">{service.description}</p><ul className="mt-6 space-y-2 font-mono text-xs text-[#465064]">{service.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>
}

export default Projects