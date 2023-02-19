import { useState } from 'react'
import style from '../../styles/Create.module.css'

export default function Create() {
    const [title, setTitle] = useState('')
    const [method, setMethod] = useState('')
    const [cookingTime, setCookingTime] = useState('')
    const [newIngredient, setNewIngredient] = useState('')
    const [ingredients, setIngredients] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        console.log(title, method, cookingTime)
    }

    function handleAdd(e) {
        e.preventDefault()
        const ing = newIngredient.trim()

        if(ing && !ingredients.includes(ing)) {
            setIngredients(prevIngredients => [...prevIngredients, ing])
        }
        setNewIngredient('')
    }

    return (
        <main className={style.create}>
            <h2 className={style.page_title}>Adicione uma nova receita</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome da receita:</span>
                    <input 
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        required 
                    />
                </label>

                <label>
                    <span>Ingredientes:</span>
                    <div className={style.ingredients}>
                        <input type="text" 
                            onChange={(e) => setNewIngredient(e.target.value)}
                            value={newIngredient}
                        />
                        <button className={style.btn} onClick={handleAdd}>Adicionar</button>
                    </div>
                </label>
                <p>Ingredientes: {ingredients.map(ingredient => (
                    <em key={ingredient}>{ingredient}, </em>
                ))}</p>

                <label>
                    <span>Passo-a-passo:</span>
                    <textarea 
                        onChange={(e) => setMethod(e.target.value)}
                        value={method}
                        required
                    />
                </label>

                <label>
                    <span>Tempo de preparo (em minutos):</span>
                    <input type="number" 
                        onChange={(e) => setCookingTime(e.target.value)}
                        value={cookingTime}
                        required
                    />
                </label>

                <button className={style.btn}>Adicionar receita</button>
            </form>
        </main>
    )
}