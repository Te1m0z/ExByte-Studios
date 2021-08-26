import { useRecoilState } from 'recoil';
import './registerform.sass';
import { authorized, editor } from '../../../state/index.js';

export function RegisterForm() {

    const [auth, setAuth] = useRecoilState(authorized);
    const [edit, setEdit] = useRecoilState(editor);

    const fetchRegister = async e => {
        e.preventDefault();

        var data = new FormData(e.target);

        var req = await fetch('http://exbyte-studios.loc/api/create_user.php', {
            method: 'POST',
            body: data
        }).catch(err => console.log(err));

        var res = await req.json();

        if (res.status) {
            localStorage.setItem('data', JSON.stringify(res.data));
            localStorage.setItem('session', res.session);
            setAuth(true);
        } else if (res.data.status === 'authorized') {
            setEdit(true);
        }
    }

    return (
        <form onSubmit={fetchRegister} className='register-form'>

            <div className='field'>
                <label htmlFor='register-login'>Login</label>
                <input type='text' name='login' id='register-login' />
            </div>

            <div className='field'>
                <label htmlFor='register-email'>Email</label>
                <input type='text' name='email' id='register-email' />
            </div>

            <div className='field'>
                <label htmlFor='register-password'>Password</label>
                <input type='password' name='password' id='register-password' />
            </div>

            <div className='field'>
                <label htmlFor='register-password'>Repeat password</label>
                <input type='password' name='password' id='register-password' />
            </div>

            <button type='submit'>Create Account</button>
        </form>
    )
}