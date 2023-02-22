import { Link } from 'react-router-dom'
import { useContext } from 'react'

import { ThemeContext } from '../context/ThemeContext'

import style from '../styles/Navbar.module.css'

import Searchbar from './SearchBar'

export default function Navbar() {
    const { color } = useContext(ThemeContext)

    return (
        <header className={style.navbar} style={{ backgroundColor: color }}>
            <nav>
                <Link to='/' className={style.link}>
                    <h1>Panelinha</h1>
                </Link>
                <Searchbar />
                <Link to='/create'>
                    Criar receita
                </Link>
            </nav>
        </header>
    )
}