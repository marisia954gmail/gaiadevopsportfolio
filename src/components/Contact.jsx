function Contact() {
  return <section className="shell py-20 sm:py-28" id="contact" aria-labelledby="contact-title"><div className="grid gap-14 lg:grid-cols-2 lg:gap-20"><div><p className="eyebrow">04 / Contact</p><h2 id="contact-title" className="mt-7 text-5xl font-extrabold leading-[1.05] sm:text-6xl">Make the next<br />move a good one.</h2><p className="mt-7 max-w-md text-lg leading-8 text-[#465064]">Tell me what you are trying to build, repair, or simplify.</p></div><form action="mailto:hello@gaiadevops.dev" method="post" encType="text/plain" className="grid gap-6"><Field label="Name" id="name" autoComplete="name" placeholder="Your name" /><Field label="Email" id="email" type="email" autoComplete="email" placeholder="you@company.com" /><label className="grid gap-2 font-mono text-xs font-medium uppercase tracking-wider">Message<textarea className="field min-h-36 resize-y" id="message" name="message" rows="5" placeholder="A little about your project..." required /></label><button className="button justify-self-start" type="submit">Send message <span aria-hidden="true">→</span></button></form></div></section>
}

function Field({ label, id, type = 'text', ...props }) {
  return <label className="grid gap-2 font-mono text-xs font-medium uppercase tracking-wider">{label}<input className="field" id={id} name={id} type={type} required {...props} /></label>
}

export default Contact