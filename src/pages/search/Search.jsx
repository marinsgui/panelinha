import { useLocation } from 'react-router-dom'

import style from '../../styles/Search.module.css'

import useFetch from '../../hooks/useFetch'

import RecipeList from '../../components/RecipeList'

export default function Search() {
    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get('q')

    const url = 'http://localhost:3000/recipes?q=' + query
    const { error, data, isPending } = useFetch(url)

    return (
        <div>
            <h2 className={style.page_title}>Receitas com "{query}"</h2>
            {error && <p className={style.error}>{error}</p>}
            {isPending && <p className={style.loading}>Loading...</p>}
            {data && <RecipeList recipes={data} />}
        </div>
    )
}