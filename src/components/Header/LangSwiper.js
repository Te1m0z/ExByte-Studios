import { Link } from 'react-router-dom';

export function LangSwiper() {
    
    
    return (
        <div className='change-lang'>
            <Link to='/ru'>RU</Link>
            <Link to='/en'>EN</Link>
        </div>
    )
}