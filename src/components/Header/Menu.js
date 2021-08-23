import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Menu() {

    const [ t ] = useTranslation('common');

    return (
        <nav>
            <NavLink
                to='/'
                exact
                activeClassName='active-navlink'
            >
                {t('header.menu.home')}
            </NavLink>

            <NavLink
                to='/games'
                activeClassName='active-navlink'
            >
                {t('header.menu.games')}
            </NavLink>

            <NavLink
                to='/careers'
                activeClassName='active-navlink'
            >
                {t('header.menu.careers')}
            </NavLink>

            <NavLink
                to='/gallery'
                activeClassName='active-navlink'
            >
                {t('header.menu.gallery')}
            </NavLink>
        </nav>
    )
}