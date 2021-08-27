import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';

import { authorized } from '../../state/index.js';

export function Menu() {

    const [ t ] = useTranslation('common');

    const { status } = useRecoilValue(authorized);

    return (
        <nav>
            <NavLink
                exact
                to='/'
                activeClassName='active-navlink'
            >
                {t('header.menu.home')}
            </NavLink>

            <NavLink
                exact
                to='/games'
                activeClassName='active-navlink'
            >
                {t('header.menu.games')}
            </NavLink>

            <NavLink
                exact
                to='/gallery'
                activeClassName='active-navlink'
            >
                {t('header.menu.gallery')}
            </NavLink>

            { !status &&
                <NavLink
                    exact
                    to='/login'
                    activeClassName='active-navlink'
                >
                    Account
                </NavLink>
            }
            
            { status &&
                <NavLink
                    exact
                    to='/profile'
                    activeClassName='active-navlink'
                >
                    Profile
                </NavLink>
            }
        </nav>
    )
}