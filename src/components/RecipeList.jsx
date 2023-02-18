import { Link } from 'react-router-dom'

import style from '../styles/RecipeList.module.css'

export default function RecipeList({ recipes }) {
    return (
        <div className={style.recipe_list}>
            {recipes.map(recipe => (
                <div key={recipe.id} className={style.card}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime} minutos para fazer.</p>
                    <div>{recipe.method.substring(0, 100)}...</div>
                    <Link to={`/recipes/${recipe.id}`}>Tente fazer!</Link>
                </div>
            ))}
        </div>
    )
}