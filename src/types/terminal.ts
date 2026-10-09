import { aboutText } from '../data/about'
import { projects } from '../data/projects'
import { contact } from '../data/contact'
import { dependencies } from '../data/dependencies'
import { education } from '../data/education'
import { experience } from '../data/experience'
import { skills } from '../data/skills'

export type HelpGroup = {
  title: string
  commands: string[]
}

export type HistoryEntry =
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
      type: 'skills'
      content: typeof skills
    }
  | {
      type: 'experience'
      content: typeof experience
    }
  | {
      type: 'education'
      content: typeof education
    }
  | {
      type: 'help'
      content: HelpGroup[]
    }
  | {
      type: 'ascii'
      content: string
    }
  | {
      type: 'dependency'
      content: typeof dependencies
    }
  | {
      type: 'install-step'
      step: 'fetching' | 'downloaded' | 'installing' | 'postinstall'
      content: string
    }
  | {
      type: 'postinstall'
      content: string[]
    }
