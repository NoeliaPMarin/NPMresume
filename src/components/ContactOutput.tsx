import type { Contact } from '../data/contact'

type ContactOutputProps = {
  contact: Contact
}

function ContactOutput({ contact }: ContactOutputProps) {
  return (
    <section className="mb-6 rounded-xl border border-slate-700/80 bg-slate-900/40 p-4 sm:p-5">
      <div>
        <h1 className="mb-3 text-xl font-bold text-emerald-300">Contact Information</h1>
        <div className="min-w-0 space-y-2 text-slate-300">
          <p className="break-words">Phone: <a className="break-all text-cyan-200 underline decoration-cyan-300/40 underline-offset-4 hover:text-cyan-100" href={`tel:${contact.intro.phone}`}>{contact.intro.phone}</a></p>
          <p className="break-words">Email: <a className="break-all text-cyan-200 underline decoration-cyan-300/40 underline-offset-4 hover:text-cyan-100" href={`mailto:${contact.intro.email}`}>{contact.intro.email}</a></p>
          <p className="break-words">LinkedIn: <a className="break-all text-cyan-200 underline decoration-cyan-300/40 underline-offset-4 hover:text-cyan-100" href={contact.intro.linkedin} target="_blank" rel="noopener noreferrer">{contact.intro.linkedin}</a></p>
          <p className="break-words">GitHub: <a className="break-all text-cyan-200 underline decoration-cyan-300/40 underline-offset-4 hover:text-cyan-100" href={contact.intro.github} target="_blank" rel="noopener noreferrer">{contact.intro.github}</a></p>
        </div>
      </div>
    </section>
  )
}

export default ContactOutput
