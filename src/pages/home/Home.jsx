import RecipeList from '../../components/RecipeList'
import useFetch from '../../hooks/useFetch'

import style from '../../styles/Home.module.css'

export default function Home() {
    const { data, isPending, error } = useFetch('http://localhost:3000/recipes')

    return (
        <main className={style.home}>
            {error && <p className={style.error}>{error}</p>}
            {isPending && <p className={style.loading}>Loading...</p>}
            {data && <RecipeList recipes={data} />}
        </main>
    )
}