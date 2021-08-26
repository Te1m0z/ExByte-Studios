import { Link } from 'react-router-dom';
import { RegisterForm } from '../../components/index.js'
import './register.sass';

export function Register() {

    return (
        <div>
            <RegisterForm />
            <div className='login-block'>
                <span>Have account? </span>
                <Link to='/login'>Log in!</Link>
            </div>
        </div>
    )
}