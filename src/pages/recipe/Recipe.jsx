import { useParams } from 'react-router-dom'

import style from '../../styles/Recipe.module.css'

import useFetch from '../../hooks/useFetch'

export default function Recipe() {
    const {id} = useParams()

    const { data, isPending, error } = useFetch(`http://localhost:3000/recipes/${id}`)

    return (
        <main className={style.recipe}>
            {isPending && <p className={style.loading}>Loading...</p>}
            {error && <p className={style.error}>{error}</p>}
            {data && <h1>{data.title}</h1>}
        </main>
    )
}