import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    setStatus('sending')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData)),
      })

      if (!response.ok) throw new Error('Contact request failed')

      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const isSending = status === 'sending'

  return <section className="bg-[#e4e8ee] shell py-20 sm:py-28" id="contact" aria-labelledby="contact-title"><div className="grid gap-14 lg:grid-cols-2 lg:gap-20"><div><p className="eyebrow">04 / Contact</p><h2 id="contact-title" className="mt-7 text-5xl font-extrabold leading-[1.05] sm:text-6xl">Make the next<br />move a good one.</h2><p className="mt-7 max-w-md text-lg leading-8 text-[#465064]">Tell me what you are trying to build, repair, or simplify. Gaia DevOps serves South Florida and remote teams.</p></div><form className="grid gap-6" onSubmit={handleSubmit}><Field label="Name" id="name" autoComplete="name" placeholder="Your name" /><Field label="Email" id="email" type="email" autoComplete="email" placeholder="you@company.com" /><label className="grid gap-2 font-mono text-xs font-medium uppercase tracking-wider">Message<textarea className="field min-h-36 resize-y" id="message" name="message" rows="5" placeholder="A little about your project..." required /></label><button className="button justify-self-start" type="submit" disabled={isSending}>{isSending ? 'Sending...' : 'Send message'} <span aria-hidden="true">→</span></button><p className="font-mono text-xs" aria-live="polite">{status === 'success' && 'Message sent. Thank you.'}{status === 'error' && 'Unable to send your message. Please try again.'}</p></form></div></section>
}

function Field({ label, id, type = 'text', ...props }) {
  return <label className="grid gap-2 font-mono text-xs font-medium uppercase tracking-wider">{label}<input className="field" id={id} name={id} type={type} required {...props} /></label>
}

export default Contact