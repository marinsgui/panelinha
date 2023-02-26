import { Link } from 'react-router-dom'

import style from '../styles/RecipeList.module.css'

import useTheme from '../hooks/useTheme'

export default function RecipeList({ recipes }) {

    const { mode } = useTheme()

    if(recipes.length === 0) {
        return <div className={style.error}>Nenhuma receita encontrada</div>
    }

    return (
        <div className={style.recipe_list}>
            {recipes.map(recipe => (
                <div key={recipe.id} className={`${style.card} ${style[mode]}`}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime} minutos para fazer.</p>
                    <div>{recipe.method.substring(0, 100)}...</div>
                    <Link to={`/recipes/${recipe.id}`}>Tente fazer!</Link>
                </div>
            ))}
        </div>
    )
}