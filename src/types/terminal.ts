import { aboutText } from '../data/about'
import { projects } from '../data/projects'
import { contact } from '../data/contact'
import { dependencies } from '../data/dependencies'

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
      type: 'dependency'
      content: typeof dependencies
    }
  | {
      type: 'installing'
      content: string
  }