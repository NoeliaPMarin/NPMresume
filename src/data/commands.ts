import { aboutText} from './about'
import { contact } from './contact'
import { dependencies } from './dependencies'
import { projects } from './projects'
import { skills } from './skills'
import type { HistoryEntry } from '../types/terminal'

export const installingMessage = 'Installing dependencies...'

type CommandContext = {
    isInstalled: boolean
    commandNames: string[]
}

type CommandResult = {
    entries: HistoryEntry[]
    clearHistory?: boolean
    startInstallation?: boolean
    downloadUrl?: string
}

type CommandHandler = (context: CommandContext) => CommandResult

export const commands: Record<string, CommandHandler> = {
    'npm help': ({ commandNames }) => ({
        entries: [
            {
                type: 'output',
                content: `Available commands: ${commandNames.join(', ')}`,
            },
        ],
    }),

    'npm about': () => ({
        entries: [{ type: 'about', content: aboutText }],
    }),

'npm skills': () => ({
    entries: [
      { type: 'output', content: `Frontend: ${skills.frontend.join(', ')}` },
      { type: 'output', content: `Backend: ${skills.backend.join(', ')}` },
      { type: 'output', content: `Testing: ${skills.testing.join(', ')}` },
      { type: 'output', content: `Tools: ${skills.tools.join(', ')}` },
      { type: 'output', content: `Strengths: ${skills.strengths.join(', ')}` },
    ],
  }),

  'npm projects': () => ({
    entries: [{ type: 'projects', content: projects }],
  }),

  'npm contact': () => ({
    entries: [{ type: 'contact', content: contact }],
  }),

  'npm download cv': () => ({
    downloadUrl: '/cv-software-engineer.pdf',
    entries: [
      { type: 'output', content: 'Downloading CV...' },
    ],
  }),

  'npm install noelia': ({ isInstalled }) => {
    if (isInstalled) {
      return {
        entries: [
          { type: 'output', content: 'noelia is already installed.' },
        ],
      }
    }

    return {
      startInstallation: true,
      entries: [
        { type: 'installing', content: installingMessage },
        { type: 'dependency', content: dependencies },
      ],
    }
  },

  'npm clear': () => ({
    entries: [],
    clearHistory: true,
  }),
}

export const availableCommands = Object.keys(commands)
