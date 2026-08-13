import SectionHeading from './SectionHeading'
import { expertiseGroups } from '../data/portfolio'

function Expertise() {
  return <section className="bg-[#172033] py-20 text-[#f6f8fb] sm:py-28" aria-labelledby="expertise-title"><div className="shell"><SectionHeading eyebrow="01 / Expertise" title={<>A stack that supports<br />the whole product.</>}><p>From the first interface to production operations, every layer is chosen to keep momentum high and maintenance sensible.</p></SectionHeading><div className="mt-16 grid border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">{expertiseGroups.map(({ title, description, skills }, index) => <article className="border-b border-r border-white/15 p-6 sm:p-7" key={title}><p className="font-mono text-xs text-[#e65d3b]">0{index + 1}</p><h3 className="mt-8 text-xl font-bold leading-tight">{title}</h3><p className="mt-5 text-sm leading-6 text-white/65">{description}</p><ul className="mt-7 space-y-2 border-t border-white/15 pt-5 font-mono text-xs text-white/80">{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>)}</div></div></section>
}

export default Expertise