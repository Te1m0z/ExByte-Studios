import { LangSwiper } from './LangSwiper.js';
import { ThemeSwiper } from './ThemeSwiper.js';
import { Menu } from './Menu.js';
import { StyleButton } from './StyleButton.js';

import './header.sass';

export function Header() {

    return (
        <header className='header'>
            <div className='container'>
                <div className='logo'>Logotype</div>
                <div className='header-rightside'>
                    <Menu />
                    <StyleButton />
                </div>
            </div>
        </header>
    )
}