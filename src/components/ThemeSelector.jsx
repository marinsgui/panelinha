import useTheme from '../hooks/useTheme'

import style from '../styles/ThemeSelector.module.css'

const themeColors = ['#58249c', '#249c6b', '#b70233']

export default function ThemeSelector() {
    const { changeColor } = useTheme()

    return (
        <div className={style.theme_selector}>
            <div className={style.theme_buttons}>
                {themeColors.map(color => (
                    <div 
                        key={color}
                        onClick={() => changeColor(color)}
                        style={{ backgroundColor: color }}    
                    />
                ))}
            </div>
        </div>
    )
}