import i18n from '../../i18n.js';
import { useSettings } from '../../hooks/index.js';

export function LangSwiper() {

    const changeLang = lang => {
        localStorage.setItem('language', lang)
        i18n.changeLanguage(lang);
    }

    const { settings } = useSettings();

    console.log(settings)
    
    return (
        <div className='change-lang'>
            <button
                theme={settings.theme}
                onClick={() => changeLang('ru')}
            >RU</button>

            <button
                theme={settings.theme}
                onClick={() => changeLang('en')}
            >EN</button>
        </div>
    )
}