import { Link } from 'react-router-dom'
import useTheme from '../hooks/useTheme'

import style from '../styles/Navbar.module.css'

import Searchbar from './Searchbar'

export default function Navbar() {
    const { color } = useTheme()

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