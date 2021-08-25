import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';

import { authorized } from '../../state/index.js';

export function Menu() {

    const [ t ] = useTranslation('common');

    const [auth, setAuth] = useRecoilState(authorized);

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
                to='/gallery'
                activeClassName='active-navlink'
            >
                {t('header.menu.gallery')}
            </NavLink>

            { !auth &&
                <NavLink
                    to='/register'
                    activeClassName='active-navlink'
                >
                    Register
                </NavLink>
            }
            { !auth &&
                <NavLink
                    to='/login'
                    activeClassName='active-navlink'
                >
                    Login
                </NavLink>
            }
            { auth &&
                <NavLink
                    to='/profile'
                    activeClassName='active-navlink'
                >
                    Profile
                </NavLink>
            }
        </nav>
    )
}