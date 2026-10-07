import { useEffect, useState, type ChangeEvent, type ReactNode, type SubmitEvent } from 'react'
import { aboutText } from '../data/about'
import { skills } from '../data/skills'
import { projects } from '../data/projects'
import ProjectList from './ProjectList'
import { contact } from '../data/contact'
import ContactOutput from './ContactOutput'
import {dependencies} from '../data/dependencies'

const availableCommands = ['npm help', 'npm about', 'npm skills', 'npm projects', 'npm contact', 'npm install noelia']

type HistoryEntry =
  | {
      type: 'command' | 'output'
      content: string
    }
  | {
      type: 'about'
      content: typeof aboutText
    }
  | {
      type: 'projects'
      content: typeof projects
    }
  | {
      type: 'contact'
      content: typeof contact
    }
  | {
      type: 'dependency'
      content: typeof dependencies
    }

  const dependencyDelay = 120
  const installationDuration = dependencies.length * dependencyDelay

  const DelayedItem = ({ children, delay }: { children: ReactNode; delay: number }) => {
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsReady(true)
      }, delay)

      return () => clearTimeout(timer)
    }, [delay])

    if (!isReady) return null

    return <>{children}</>
  }

function Terminal() {
  const [text, setText] = useState('')
  const [commandHistory, setCommandHistory] = useState<HistoryEntry[]>([])
  const command = text.trim()
  const [isInstalling, setIsInstalling] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  useEffect(() => {
  if (!isInstalling) return

  const timer = setTimeout(() => {
    setIsInstalling(false)
    setIsInstalled(true)
  }, installationDuration)

  return () => clearTimeout(timer)
  }, [isInstalling])

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (command === '') return

    setCommandHistory((previousHistory) => [
      ...previousHistory,
      { type: 'command', content: command },
    ])

    if (command === 'npm install noelia') {
      if (isInstalled) {
        setCommandHistory((previousHistory) => [
          ...previousHistory,
          { type: 'output', content: 'noelia is already installed.' },
        ])
      } else {
        setIsInstalling(true)
        setCommandHistory((previousHistory) => [
          ...previousHistory,
          { type: 'output', content: 'Installing dependencies...' },
          { type: 'dependency', content: dependencies },
        ])
      }

      setText('')
      return
    }

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

    if (command === 'npm skills') {
      setCommandHistory((previousHistory) => [
        ...previousHistory,
        { type: 'output', content: `Frontend: ${skills.frontend.join(', ')}` },
        { type: 'output', content: `Backend: ${skills.backend.join(', ')}` },
        { type: 'output', content: `Testing: ${skills.testing.join(', ')}` },
        { type: 'output', content: `Tools: ${skills.tools.join(', ')}` },
        { type: 'output', content: `Strengths: ${skills.strengths.join(', ')}` },
      ])
    }

    if (command === 'npm projects') {
      setCommandHistory((previousHistory) => [
        ...previousHistory,
        { type: 'projects', content: projects },
      ])
    }

    if (command === 'npm contact') {
      setCommandHistory((previousHistory) => [
        ...previousHistory,
        { type: 'contact', content: contact },
      ])
    }

    if (!availableCommands.includes(command)) {
      setCommandHistory((previousHistory) => [
        ...previousHistory,
        { type: 'output', content: `Command not found: ${command} Run \`npm help\` to see available commands.` },
      ])
    }

    setText('')
  }

  return (
    <main className="min-h-screen bg-black p-6 font-mono text-green-400">
      {commandHistory.length === 0 && !isInstalled && (
        <p className="mb-2 text-green-300">
          Tip: run <code>npm install noelia</code> to begin.
        </p>
      )}

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

        if (entry.type === 'projects') {
          return <ProjectList key={index} projects={entry.content} />
        }

        if (entry.type === 'contact') {
          return <ContactOutput key={index} contact={entry.content} />
        }

        if (entry.type === 'dependency') {
          return (
            <div key={index}>
              <ul className="mb-2 list-inside list-disc">
                {entry.content.map((dependency, dependencyIndex) => (
                  <DelayedItem key={dependency.name}
                  delay={dependencyIndex * dependencyDelay}>
                    <li>✔ {dependency.name}</li>
                  </DelayedItem>
                ))}
              </ul>
              <DelayedItem delay={installationDuration}>
                <p className="mb-2">Done in 1.2s.</p>
              </DelayedItem>
            </div>
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
          disabled={isInstalling}
        />
      </form>
    </main>
  )
}

export default Terminal
