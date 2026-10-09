import {
  useEffect,
  useState,
  type ReactNode,
  type RefObject,
} from 'react'
import { dependencies } from '../data/dependencies'
import { installingMessage } from '../data/commands'
import type { HistoryEntry } from '../types/terminal'
import ContactOutput from './ContactOutput'
import EducationList from './EducationList'
import ExperienceList from './ExperienceList'
import ProjectList from './ProjectList'
import SkillsOutput from './SkillsOutput'
import TypingText from './TypingText'

type CommandHistoryProps = {
  commandHistory: HistoryEntry[]
  isInstalled: boolean
  listRef: RefObject<HTMLDivElement | null>
}

function DelayedItem({
  children,
  delay,
}: {
  children: ReactNode
  delay: number
}) {
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

function CommandHistory({
  commandHistory,
  isInstalled,
  listRef,
}: CommandHistoryProps) {
  const typingSpeed = 20
  const fetchingDelay = 0
  const downloadedDelay = 500
  const installingDelay = 850
  const typingDuration = installingMessage.length * typingSpeed
  const dependencyDelay = 140
  const dependenciesStart = installingDelay + typingDuration + 200
  const postinstallDelay = dependenciesStart + dependencies.length * dependencyDelay + 200
  const postinstallLinesStart = postinstallDelay + 700

  return (
    <>
      {commandHistory.length === 0 && !isInstalled && (
        <p className="terminal-tip mb-5 px-4 py-3 text-sm">
          Tip: run{' '}
          <code className="terminal-inline-code px-1.5 py-0.5">
            npm install noelia
          </code>{' '}
          to begin.
        </p>
      )}

      <div
        ref={listRef}
        className="terminal-history min-w-0 space-y-3 text-sm leading-relaxed sm:text-base"
        role="log"
        aria-label="Terminal output"
        aria-live="polite"
        aria-relevant="additions text"
      >
        {commandHistory.map((entry, index) => {
          if (entry.type === 'about') {
            return (
              <section key={index} className="terminal-about mb-6 space-y-5 px-4 py-4 sm:px-6 sm:py-6">
                <header>
                  <h1 className="terminal-title text-xl font-bold">
                    {entry.content.intro.name}
                  </h1>
                  <p className="terminal-meta">{entry.content.intro.role}</p>
                  <p className="terminal-copy mt-4 max-w-2xl text-lg">
                    {entry.content.intro.statement}
                  </p>
                </header>

                <div className="terminal-divider" aria-hidden="true" />
                <div className="terminal-copy space-y-2">
                  {entry.content.background.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="terminal-divider" aria-hidden="true" />
                <div>
                  <p className="terminal-title mb-2 font-semibold">Currently focused on:</p>
                  <ul className="terminal-list space-y-1">
                  {entry.content.focus.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="terminal-prompt" aria-hidden="true">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                  </ul>
                </div>
              </section>
            )
          }

          if (entry.type === 'projects') {
            return <ProjectList key={index} projects={entry.content} />
          }

          if (entry.type === 'contact') {
            return <ContactOutput key={index} contact={entry.content} />
          }

          if (entry.type === 'skills') {
            return <SkillsOutput key={index} skills={entry.content} />
          }

          if (entry.type === 'experience') {
            return <ExperienceList key={index} experience={entry.content} />
          }

          if (entry.type === 'education') {
            return <EducationList key={index} education={entry.content} />
          }

          if (entry.type === 'help') {
            return (
              <section key={index} className="terminal-card mb-6 space-y-5 px-4 py-3 sm:px-5 sm:py-4">
                <h1 className="terminal-title text-xl font-bold">Available commands</h1>
                {entry.content.map((group) => (
                  <div key={group.title}>
                    <h2 className="terminal-meta mb-2 text-sm font-semibold uppercase tracking-wide">
                      {group.title}
                    </h2>
                    <ul className="space-y-1">
                      {group.commands.map((command) => (
                        <li key={command} className="flex gap-2">
                          <span className="terminal-prompt" aria-hidden="true">→</span>
                          <code className="terminal-inline-code px-1.5 py-0.5">{command}</code>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>
            )
          }

          if (entry.type === 'ascii') {
            return (
              <pre key={index} className="terminal-ascii mb-2">{entry.content}</pre>
            )
          }

          if (entry.type === 'install-step') {
            const delayByStep = {
              fetching: fetchingDelay,
              downloaded: downloadedDelay,
              installing: installingDelay,
              postinstall: postinstallDelay,
            }

            return (
              <DelayedItem key={index} delay={delayByStep[entry.step]}>
                <p
                  className={`terminal-output mb-2 break-words ${
                    entry.step === 'postinstall'
                      ? 'terminal-postinstall-heading'
                      : ''
                  }`}
                >
                  {entry.step === 'downloaded' && (
                    <span className="terminal-check">✔ </span>
                  )}
                  {entry.step === 'fetching' || entry.step === 'installing' || entry.step === 'postinstall' ? (
                    <TypingText text={entry.content} speed={typingSpeed} />
                  ) : (
                    entry.content
                  )}
                </p>
              </DelayedItem>
            )
          }

          if (entry.type === 'dependency') {
            return (
              <div key={index}>
                <ul className="terminal-list mb-2 list-inside list-disc space-y-1">
                  {entry.content.map((dependency, dependencyIndex) => (
                    <DelayedItem
                      key={dependency.name}
                      delay={
                        dependenciesStart + dependencyIndex * dependencyDelay
                      }
                    >
                      <li className="break-words"><span className="terminal-check">✔</span> {dependency.name}</li>
                    </DelayedItem>
                  ))}
                </ul>

              </div>
            )
          }

          if (entry.type === 'postinstall') {
            return (
              <div key={index} className="mb-2 space-y-2">
                {entry.content.map((line, lineIndex) => (
                  <DelayedItem
                    key={line}
                    delay={postinstallLinesStart + lineIndex * 180}
                  >
                    <p
                      className={
                        lineIndex === 0
                          ? 'terminal-command break-words'
                          : 'terminal-output break-words'
                      }
                    >
                      {line}
                    </p>
                  </DelayedItem>
                ))}
              </div>
            )
          }

          return (
            <p
              key={index}
              className={`terminal-line mb-2 break-words ${
                entry.type === 'command' ? 'terminal-command' : 'terminal-output'
              }`}
            >
              {entry.type === 'command' && (
                <span className="terminal-prompt mr-2 font-bold" aria-hidden="true">
                  $
                </span>
              )}
              {entry.content}
            </p>
          )
        })}
      </div>
    </>
  )
}

export default CommandHistory
