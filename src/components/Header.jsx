import Brand from './Brand'

function Header() {
  return <div className="sticky top-0 z-50 bg-[#f6f8fb]"> <header className="border-b border-[#172033]/10">
    <div className="shell flex h-20 items-center justify-between"><a href="#home" aria-label="Gaia DevOps home"><Brand /></a><nav className="flex items-center gap-6" aria-label="Main navigation"><a className="font-mono text-sm font-medium hover:text-[#e65d3b]" href="#projects">Projects <span aria-hidden="true">↗</span></a><a className="font-mono text-sm font-medium hover:text-[#e65d3b]" href="#contact">Contact <span aria-hidden="true">↗</span></a></nav></div>
    </header></div>
}

export default Header