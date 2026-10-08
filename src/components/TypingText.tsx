import { useEffect, useState } from 'react'

type TypingTextProps = {
    text: string
    speed?: number
}

function TypingText({ text, speed = 15}: TypingTextProps) {
    const [visibleText, setVisibleText] = useState('')

    useEffect(() => {
        let characterIndex = 0

        const timer = window.setInterval(() => {
            characterIndex += 1
            setVisibleText(text.slice(0, characterIndex))

            if (characterIndex === text.length) {
                window.clearInterval(timer)
            }
        }, speed)

        return () => window.clearInterval(timer)
    }, [text, speed])

    return <>{visibleText}</>
}

export default TypingText