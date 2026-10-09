import { aboutText} from './about'
import { contact } from './contact'
import { dependencies } from './dependencies'
import { projects } from './projects'
import { skills } from './skills'
import { experience } from './experience'
import { education } from './education'
import type { HelpGroup, HistoryEntry } from '../types/terminal'
import type { TerminalTheme } from '../types/theme'

export const installingMessage = 'Installing dependencies...'
export const installationDuration = 4800

export const helpGroups: HelpGroup[] = [
  {
    title: 'Portfolio',
    commands: [
      'npm about',
      'npm experience',
      'npm skills',
      'npm projects',
      'npm education',
      'npm contact',
    ],
  },
  {
    title: 'Utilities',
    commands: [
      'npm install noelia',
      'npm theme',
      'npm theme classic',
      'npm theme modern',
      'npm download cv',
      'npm clear',
    ],
  },
]

type CommandContext = {
    isInstalled: boolean
    commandNames: string[]
    theme: TerminalTheme
    setTheme: (theme: TerminalTheme) => void
}

type CommandResult = {
    entries: HistoryEntry[]
    clearHistory?: boolean
    startInstallation?: boolean
    downloadUrl?: string
}

type CommandHandler = (context: CommandContext) => CommandResult

export const commands: Record<string, CommandHandler> = {
    'npm help': () => ({
        entries: [
            {
                type: 'help',
                content: helpGroups,
            },
        ],
    }),

    'npm about': () => ({
        entries: [{ type: 'about', content: aboutText }],
    }),

'npm skills': () => ({
    entries: [{ type: 'skills', content: skills }],
  }),

  'npm experience': () => ({
    entries: [{ type: 'experience', content: experience }],
  }),

  'npm education': () => ({
    entries: [{ type: 'education', content: education }],
  }),

  'npm projects': () => ({
    entries: [{ type: 'projects', content: projects }],
  }),

  'npm contact': () => ({
    entries: [{ type: 'contact', content: contact }],
  }),

  'npm theme': ({ theme }) => ({
    entries: [
      {
        type: 'output',
        content: `Current theme: ${theme}. Use \`npm theme classic\` or \`npm theme modern\` to change it.`,
      },
    ],
  }),

  'npm theme classic': ({ setTheme }) => {
    setTheme('classic')

    return {
      entries: [{ type: 'output', content: 'Theme changed to classic.' }],
    }
  },

  'npm theme modern': ({ setTheme }) => {
    setTheme('modern')

    return {
      entries: [{ type: 'output', content: 'Theme changed to modern.' }],
    }
  },

  'npm download cv': () => ({
    downloadUrl: '/cv-software-engineer.pdf',
    entries: [
      { type: 'output', content: 'Downloading CV...' },
    ],
  }),

  'npm hire noelia': () => ({
    entries: [
      { type: 'output', content: '✔ Hiring request received.' },
      { type: 'output', content: 'Noelia is ready to build something thoughtful.' },
      { type: 'output', content: 'Run `npm contact` to start a conversation.' },
    ],
  }),

  'npm lore': () => ({
    entries: [
      { type: 'output', content: 'Character lore unlocked:' },
      { type: 'output', content: 'Previously: 10 years shaping visual stories as a graphic designer.' },
      { type: 'output', content: 'Now: Software Engineer, building the experiences behind them.' },
      { type: 'output', content: 'Side quests: video games, knitting, cats and autumn walks.' },
      { type: 'output', content: 'Companion unlocked:' },
      { type: 'ascii', content: ' /\\_/\\\n( o.o )\n > ^ <' },
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
        {
          type: 'install-step',
          step: 'fetching',
          content: 'Fetching package...',
        },
        {
          type: 'install-step',
          step: 'downloaded',
          content: 'Downloaded noelia@1.0.0',
        },
        { type: 'install-step', step: 'installing', content: installingMessage },
        { type: 'dependency', content: dependencies },
        {
          type: 'install-step',
          step: 'postinstall',
          content: 'Running postinstall script...',
        },
        {
          type: 'postinstall',
          content: [
            '> noelia@1.0.0 postinstall',
            'Hello! 👋',
            'Thanks for installing Noelia.',
            'Type "npm help" to explore the package.',
          ],
        },
      ],
    }
  },

  'npm clear': () => ({
    entries: [],
    clearHistory: true,
  }),
}

export const availableCommands = Object.keys(commands)
