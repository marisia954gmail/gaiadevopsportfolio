import Brand from './Brand'

function Footer() {
  return <footer className="bg-[#172033] py-8 text-[#f6f8fb]"><div className="shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><a href="#home" aria-label="Back to top"><Brand /></a><p className="font-mono text-xs text-white/55">Primary contrast: #172033 on #F6F8FB = 15.5:1</p></div></footer>
}

export default Footer