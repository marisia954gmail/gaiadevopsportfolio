function SectionHeading({ eyebrow, title, children }) {
  return <div className="grid gap-8 border-t border-[#172033]/15 pt-5 lg:grid-cols-2 lg:gap-20"><div><p className="eyebrow">{eyebrow}</p><h2 className="mt-7 text-4xl font-extrabold leading-[1.05] sm:text-5xl">{title}</h2></div>{children && <div className="self-end text-lg leading-8 text-[#465064]">{children}</div>}</div>
}

export default SectionHeading