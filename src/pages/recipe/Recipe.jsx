import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import style from '../../styles/Recipe.module.css'

import useTheme from '../../hooks/useTheme'

import { projectFirestore } from '../../firebase/config'

export default function Recipe() {
    const { id } = useParams()
    const { mode } = useTheme()

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setIsPending(true)

        const unsub = projectFirestore.collection('recipes').doc(id).onSnapshot((doc) => {
            if(doc.exists) {
                setIsPending(false)
                setData(doc.data())
            } else {
                setIsPending(false)
                setError('Receita não encontrada')
            }
        })

        return () => unsub()
    }, [id])

    return (
        <main className={`${style.recipe} ${style[mode]}`}>
            {isPending && <p className={style.loading}>Loading...</p>}
            {error && <p className={style.error}>{error}</p>}
            {data && (
                <>
                    <h2 className={style.page_title}>{data.title}</h2>
                    <p>Leva {data.cookingTime} minutos para fazer.</p>
                    <ul>
                        {data.ingredients.map(ing => <li key={ing}>{ing}</li>)}
                    </ul>
                    <p className={style.method}>{data.method}</p>
                </>
            )}
        </main>
    )
}