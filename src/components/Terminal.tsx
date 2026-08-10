import { useState, type ChangeEvent, type FormEvent } from 'react'

function Terminal() {
  const [text, setText] = useState('')
  const [submittedCommand, setSubmittedCommand] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmittedCommand(text)
    setText('')
  }

  return (
    <main className="min-h-screen bg-black p-6 font-mono text-green-400">
      {submittedCommand && (
        <p className="mb-2">
          <span className="mr-2" aria-hidden="true">$</span>
          {submittedCommand}
        </p>
      )}

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
