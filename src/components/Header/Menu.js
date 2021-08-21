import { NavLink } from 'react-router-dom';

export function Menu() {


    return (
        <nav>
            <NavLink
                to='/'
                exact
                activeClassName='active-navlink'
            >Home</NavLink>
            <NavLink
                to='/gallery'
                activeClassName='active-navlink'
            >Gallery</NavLink>
        </nav>
    )
}