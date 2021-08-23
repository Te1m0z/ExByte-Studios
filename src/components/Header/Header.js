import { LangSwiper } from './LangSwiper.js';
import { ThemeSwiper } from './ThemeSwiper.js';
import { Menu } from './Menu.js';

import './header.sass';

export function Header() {

    return (
        <header className='header'>
            <div className='logo'>Logotype</div>
            <div className='header-rightside'>
                <Menu />
                <LangSwiper />
                <ThemeSwiper />
            </div>
        </header>
    )
}