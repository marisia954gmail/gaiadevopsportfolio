import SectionHeading from './SectionHeading'
import { processSteps } from '../data/portfolio'

function Process() {
  return <section className="shell py-20 sm:py-28" aria-labelledby="process-title"><SectionHeading eyebrow="02 / Approach" title={<>Less ceremony.<br />More useful work.</>} /><div className="mt-16 grid border-t border-[#172033]/15 lg:ml-auto lg:w-1/2">{processSteps.map(([title, description], index) => <article className="grid grid-cols-[3rem_1fr] gap-4 border-b border-[#172033]/15 py-7" key={title}><span className="font-mono text-xs text-[#e65d3b]">0{index + 1}</span><div><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-[#465064]">{description}</p></div></article>)}</div></section>
}

export default Process