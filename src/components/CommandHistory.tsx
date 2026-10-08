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
import ProjectList from './ProjectList'
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
  const installationDuration = 1200
  const typingSpeed = 20
  const typingDuration = installingMessage.length * typingSpeed
  const dependencyDelay =
    (installationDuration - typingDuration) / dependencies.length

  return (
    <>
      {commandHistory.length === 0 && !isInstalled && (
        <p className="mb-5 border-l-2 border-emerald-400/70 bg-emerald-400/5 px-4 py-3 text-sm text-emerald-200">
          Tip: run{' '}
          <code className="bg-emerald-400/10 px-1.5 py-0.5 text-emerald-300">
            npm install noelia
          </code>{' '}
          to begin.
        </p>
      )}

      <div
        ref={listRef}
        className="min-w-0 space-y-3 text-sm leading-relaxed sm:text-base"
        role="log"
        aria-label="Terminal output"
        aria-live="polite"
        aria-relevant="additions text"
      >
        {commandHistory.map((entry, index) => {
          if (entry.type === 'about') {
            return (
              <section key={index} className="mb-6 space-y-4 border-l-2 border-emerald-400/60 bg-slate-900/30 px-4 py-3 sm:px-5 sm:py-4">
                <div>
                  <h1 className="text-xl font-bold text-emerald-300">
                    {entry.content.intro.name}
                  </h1>
                  <p>{entry.content.intro.role}</p>
                  <p>{entry.content.intro.statement}</p>
                </div>

                <div className="space-y-2 text-slate-300">
                  {entry.content.background.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <ul className="list-inside list-disc space-y-1 text-slate-300 marker:text-emerald-400">
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

          if (entry.type === 'installing') {
            return (
              <p key={index} className="mb-2 break-words text-slate-300">
                <TypingText text={entry.content} speed={typingSpeed} />
              </p>
            )
          }

          if (entry.type === 'dependency') {
            return (
              <div key={index}>
                <ul className="mb-2 list-inside list-disc space-y-1 text-slate-300 marker:text-emerald-400">
                  {entry.content.map((dependency, dependencyIndex) => (
                    <DelayedItem
                      key={dependency.name}
                      delay={
                        typingDuration + dependencyIndex * dependencyDelay
                      }
                    >
                      <li className="break-words"><span className="text-emerald-400">✔</span> {dependency.name}</li>
                    </DelayedItem>
                  ))}
                </ul>

                <DelayedItem delay={installationDuration}>
                  <p className="mb-2 text-emerald-300">Done in 1.2s.</p>
                </DelayedItem>
              </div>
            )
          }

          return (
            <p
              key={index}
              className={`mb-2 break-words ${
                entry.type === 'command' ? 'text-slate-100' : 'text-slate-300'
              }`}
            >
              {entry.type === 'command' && (
                <span className="mr-2 font-bold text-emerald-400" aria-hidden="true">
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
