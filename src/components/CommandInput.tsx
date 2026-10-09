import type { ChangeEvent, RefObject, SubmitEvent } from 'react'

type CommandInputProps = {
  text: string
  isInstalling: boolean
  inputRef: RefObject<HTMLInputElement | null>
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onSubmit: (event: SubmitEvent<HTMLFormElement>) => void
}

function CommandInput({
  text,
  isInstalling,
  inputRef,
  onChange,
  onSubmit,
}: CommandInputProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="terminal-input-form mt-8 flex min-w-0 items-center gap-2 pt-4 sm:gap-3"
      aria-label="Command entry form"
    >
      <span aria-hidden="true" className="terminal-prompt shrink-0 font-bold">
        $
      </span>
      <label className="sr-only" htmlFor="terminal-command">
        Terminal command
      </label>
      <input
        ref={inputRef}
        id="terminal-command"
        type="text"
        value={text}
        onChange={onChange}
        className="terminal-input min-w-0 flex-1 bg-transparent outline-none disabled:cursor-not-allowed disabled:opacity-50"
        aria-describedby="terminal-command-help"
        placeholder="Type npm help to explore"
        autoFocus
        spellCheck={false}
        disabled={isInstalling}
      />
      <span id="terminal-command-help" className="sr-only">
        {isInstalling
          ? 'Installing dependencies. The command input is temporarily disabled.'
          : 'Type a command and press Enter to run it.'}
      </span>
    </form>
  )
}

export default CommandInput
