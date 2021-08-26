import { Link } from 'react-router-dom';
import { LoginForm } from '../../components/index.js'
import './login.sass';

export function Login() {

    return (
        <div>
            <LoginForm />

            <div className='register-block'>
                <span>No account yet? </span>
                <Link to='/register'>Create it!</Link>
            </div>
        </div>
    )
}