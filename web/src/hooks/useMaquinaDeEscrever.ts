import { useEffect, useState } from "react"

export const UseMaquinaDeEscrever = (text: string, velocidade: number) => {
    const [index, setIndex] = useState<number>(0)

    useEffect(() => {
        if (index < text.length) {
            const interval = setInterval(() => {
                setIndex(prevIndex => prevIndex + 1)
            }, velocidade)
            return () => clearInterval(interval)
        }
    }, [index, text.length, velocidade])

    return text.substring(0, index)

}