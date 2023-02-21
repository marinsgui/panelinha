import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from '../styles/Searchbar.module.css'

export default function Searchbar() {
    const [query, setQuery] = useState('')
    const history = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        history(`/search?q=${query}`)
    }

    return (
        <div className={style.searchbar}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search:</label>
                <input 
                    type="text"
                    id='search'
                    onChange={(e) => setQuery(e.target.value)}
                    required 
                />
            </form>
        </div>
    )
}