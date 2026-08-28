import { useState, type ChangeEvent, type FormEvent } from 'react'
import { aboutText } from '../data/about'

const availableCommands = ['npm help', 'npm about', 'experience', 'projects', 'contact']

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
