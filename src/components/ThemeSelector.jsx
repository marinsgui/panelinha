import useTheme from '../hooks/useTheme'

import mode_icon from '../assets/mode-icon.svg'

import style from '../styles/ThemeSelector.module.css'

const themeColors = ['#58249c', '#249c6b', '#b70233']

export default function ThemeSelector() {
    const { changeColor, changeMode, mode } = useTheme()

    function toggleMode() {
        changeMode(mode === 'dark' ? 'light' : 'dark')
    }

    return (
        <div className={style.theme_selector}>
            <div className={style.mode_toggle}>
                <img
                    onClick={toggleMode} 
                    src={mode_icon} 
                    alt="light and dark mode icon"
                    style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }} 
                />
            </div>
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