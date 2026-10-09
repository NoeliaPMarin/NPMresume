import type { Contact } from '../data/contact'

type ContactOutputProps = {
  contact: Contact
}

function ContactOutput({ contact }: ContactOutputProps) {
  return (
    <section className="terminal-card terminal-card-accent mb-6 px-4 py-3 sm:px-5 sm:py-4">
      <div>
        <h1 className="terminal-title mb-3 text-xl font-bold">Contact Information</h1>
        <div className="terminal-copy min-w-0 space-y-2">
          <p>Location: {contact.intro.location}</p>
          <p className="break-words">Phone: <a className="terminal-link break-all underline underline-offset-4" href={`tel:${contact.intro.phone}`}>{contact.intro.phone}</a></p>
          <p className="break-words">Email: <a className="terminal-link break-all underline underline-offset-4" href={`mailto:${contact.intro.email}`}>{contact.intro.email}</a></p>
          <p>LinkedIn: <a className="terminal-link underline underline-offset-4" href={contact.intro.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn profile</a></p>
          <p>GitHub: <a className="terminal-link underline underline-offset-4" href={contact.intro.github} target="_blank" rel="noopener noreferrer">GitHub profile</a></p>
        </div>
      </div>
    </section>
  )
}

export default ContactOutput
