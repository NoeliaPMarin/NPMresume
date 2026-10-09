import { useEffect, useRef, useState, type ChangeEvent, type SubmitEvent } from 'react'
import type { HistoryEntry } from '../types/terminal'
import type { TerminalTheme } from '../types/theme'
import { availableCommands, commands, installationDuration } from '../data/commands'
import CommandInput from './CommandInput'
import CommandHistory from './CommandHistory'

function Terminal() {
  const [text, setText] = useState('')
  const [commandHistory, setCommandHistory] = useState<HistoryEntry[]>([])
  const command = text.trim()
  const [isInstalling, setIsInstalling] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)
  const [theme, setTheme] = useState<TerminalTheme>('classic')
  const listRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const downloadFile = (url: string) => {
    const link = document.createElement('a')
    link.href = url
    link.download = 'Noelia-Perez-Marin-CV.pdf'
    document.body.append(link)
    link.click()
    link.remove()
  }

  useEffect(() => {
    listRef.current?.lastElementChild?.scrollIntoView()
  }, [commandHistory])

  useEffect (() => {
    if (!isInstalling) {
      inputRef.current?.focus()
    }
  }, [isInstalling])

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

  const selectedCommand = commands[command]

  if (!selectedCommand) {
    setCommandHistory((previousHistory) => [
      ...previousHistory,
      { type: 'command', content: command },
      {
        type: 'output',
        content: `Command not found: ${command} Run \`npm help\` to see available commands.`,
      },
    ])
    setText('')
    return
  }

  const result = selectedCommand({
    isInstalled,
    commandNames: availableCommands,
    theme,
    setTheme,
  })

  if (result.clearHistory) {
    setCommandHistory([])
    setText('')
    return
  }

  if (result.startInstallation) {
    setIsInstalling(true)
  }

  if (result.downloadUrl) {
    downloadFile(result.downloadUrl)
  }

  setCommandHistory((previousHistory) => [
    ...previousHistory,
    { type: 'command', content: command },
    ...result.entries,
  ])

  setText('')
}

  return (
    <main
      className="terminal-shell min-h-screen overflow-x-hidden px-4 py-6 font-mono sm:px-6 lg:px-8 lg:py-10"
      data-theme={theme}
    >
      <section
        className="terminal-container mx-auto flex min-h-[calc(100vh-3rem)] w-full min-w-0 max-w-5xl flex-col lg:min-h-[calc(100vh-5rem)]"
        aria-label="Interactive portfolio terminal"
        aria-busy={isInstalling}
      >
        <div className="terminal-heading mb-6 flex items-center justify-between pb-3 text-xs sm:text-sm">
          <p
            className="min-w-0 truncate font-semibold tracking-wide"
            aria-label="Noelia Perez Marin. Initials: NPM."
          >
            <span aria-hidden="true">
              <span className="terminal-initial">N</span>oelia{' '}
              <span className="terminal-initial">P</span>erez{' '}
              <span className="terminal-initial">M</span>arin
            </span>
          </p>
          <span className="terminal-heading-meta ml-4 hidden shrink-0 sm:block">React + TypeScript</span>
        </div>

        <div className="flex flex-1 flex-col">
          <CommandHistory
            commandHistory={commandHistory}
            isInstalled={isInstalled}
            listRef={listRef}
          />

          <CommandInput
            text={text}
            isInstalling={isInstalling}
            inputRef={inputRef}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>
      </section>
    </main>
  )
}

export default Terminal
