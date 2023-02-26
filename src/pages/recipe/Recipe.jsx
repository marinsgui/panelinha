import { useParams } from 'react-router-dom'

import style from '../../styles/Recipe.module.css'

import useFetch from '../../hooks/useFetch'
import useTheme from '../../hooks/useTheme'

export default function Recipe() {
    const {id} = useParams()

    const { data, isPending, error } = useFetch(`http://localhost:3000/recipes/${id}`)

    const { mode } = useTheme()

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