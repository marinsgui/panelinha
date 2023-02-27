import { useEffect, useState } from 'react'
import { projectFirestore } from '../../firebase/config'

import RecipeList from '../../components/RecipeList'

import style from '../../styles/Home.module.css'

export default function Home() {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)
    
    useEffect(() => {
        setIsPending(true)

        projectFirestore.collection('recipes').get().then((snapshot) => {
            if(snapshot.empty) {
                setError('Sem receitas para carregar')
                setIsPending(false)
            } else {
                let results = []
                snapshot.docs.forEach(doc => {
                    results.push({ id: doc.id, ...doc.data() })
                })
                setData(results)
                setIsPending(false)
            }
        }).catch(err => {
            setError(err.message)
            setIsPending(false)
        })
    }, [])

    return (
        <main className={style.home}>
            {error && <p className={style.error}>{error}</p>}
            {isPending && <p className={style.loading}>Loading...</p>}
            {data && <RecipeList recipes={data} />}
        </main>
    )
}