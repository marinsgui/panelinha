import { useState, useEffect } from 'react'

export default function useFetch(url) {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const controller = new AbortController()

        const fetchData = async () => {
            setIsPending(true)

            try {
                const res = await fetch(url, { signal: controller.signal })
                if (!res.ok) {
                    throw new Error(res.statusText)
                }
                const data = await res.json()

                setIsPending(false)
                setData(data)
                setError(null)
            } catch (err) {
                if (err.name === "AbortError") {
                    console.log("A requisição foi abortada")
                } else {
                    setIsPending(false)
                    setError('Não foi possível acessar os dados')
                }
            }
        }

        fetchData()

        return () => {
            controller.abort()
        }
    }, [url])
    return { data, isPending, error }
}