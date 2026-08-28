import { useState, type ChangeEvent, type FormEvent } from 'react'

const availableCommands = ['npm help', 'npm about', 'experience', 'projects', 'contact']

const aboutText = {
  intro: {
    name: 'Noelia Perez Marin',
    role: 'Software Engineer · Frontend · Design',
    statement: 'I build digital experiences where engineering meets design.',
  },
  background: [
    'With a background in graphic design and professional experience in software engineering, I bring both sides of the process together: understanding how something should work and look, then building it.',
    'My experience spans frontend and full-stack development, working with JavaScript, React, PHP, APIs, SQL, testing, and production systems.',
  ],
  focus: [
    'Frontend Engineering',
    'React & modern JavaScript',
    'UI / UX implementation',
    'Design systems & reusable components',
    'Accessible, responsive interfaces',
  ],
}

type HistoryEntry =
  | {
      type: 'command' | 'output'
      content: string
    }
  | {
      type: 'about'
      content: typeof aboutText
    }

function Terminal() {
  const [text, setText] = useState('')
  const [commandHistory, setCommandHistory] = useState<HistoryEntry[]>([])
  const command = text.trim()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (command === '') return

    setCommandHistory((previousHistory) => [
      ...previousHistory,
      { type: 'command', content: command },
    ])

    if (command === 'npm help') {
      setCommandHistory((previousHistory) => [
        ...previousHistory,
        {
          type: 'output',
          content: `Available commands: ${availableCommands.join(', ')}`,
        },
      ])
    }

    if (command === 'npm about') {
      setCommandHistory((previousHistory) => [
        ...previousHistory,
        { type: 'about', content: aboutText },
      ])
    }

    setText('')
  }

  return (
    <main className="min-h-screen bg-black p-6 font-mono text-green-400">
      {commandHistory.map((entry, index) => {
        if (entry.type === 'about') {
          return (
            <section key={index} className="mb-6 space-y-4">
              <div>
                <h1 className="text-xl font-bold">{entry.content.intro.name}</h1>
                <p>{entry.content.intro.role}</p>
                <p>{entry.content.intro.statement}</p>
              </div>

              <div className="space-y-2">
                {entry.content.background.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <ul className="list-inside list-disc">
                {entry.content.focus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )
        }

        return (
          <p key={index} className="mb-2">
            {entry.type === 'command' && (
              <span className="mr-2" aria-hidden="true">
                $
              </span>
            )}
            {entry.content}
          </p>
        )
      })}

      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <span aria-hidden="true">$</span>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          className="flex-1 bg-transparent outline-none caret-green-400"
          aria-label="Terminal command"
          autoFocus
        />
      </form>
    </main>
  )
}

export default Terminal
