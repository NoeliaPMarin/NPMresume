import type { Contact } from '../data/contact'

type ContactOutputProps = {
  contact: Contact
}

function ContactOutput({ contact }: ContactOutputProps) {
  return (
    <section className="mb-6 space-y-4">
      <div>
        <h1 className="text-xl font-bold">Contact Information</h1>
        <p>Phone: <a href={`tel:${contact.intro.phone}`}>{contact.intro.phone}</a></p>
        <p>Email: <a href={`mailto:${contact.intro.email}`}>{contact.intro.email}</a></p>
        <p>LinkedIn: <a href={contact.intro.linkedin} target="_blank" rel="noopener noreferrer">{contact.intro.linkedin}</a></p>
        <p>GitHub: <a href={contact.intro.github} target="_blank" rel="noopener noreferrer">{contact.intro.github}</a></p>
      </div>
    </section>
  )
}

export default ContactOutput