import { useSettings } from '../../hooks/index.js';

export function ThemeSwiper() {

    const { settings, saveSettings } = useSettings();

    const toggleTheme = e => {
        saveSettings({ theme: e.target.checked ? 'dark' : 'light' });
    }

    return (
        <div className='change-theme'>
            <input
                type='checkbox'
                onChange={toggleTheme}
                checked={settings.theme === 'dark' ? true : false}
                id='theme-swiper'
            />
        </div>
    )
}