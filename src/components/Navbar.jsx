import { Link } from 'react-router-dom'

import style from '../styles/Navbar.module.css'

import Searchbar from './SearchBar'

export default function Navbar() {
    return (
        <header className={style.navbar}>
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