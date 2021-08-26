import { useRecoilState } from 'recoil';
import { authorized, editor } from '../../../state/index.js';
import './loginform.sass';

export function LoginForm() {

    const [auth, setAuth] = useRecoilState(authorized);
    const [edit, setEdit] = useRecoilState(editor);

    const fetchLogin = async e => {
        e.preventDefault();

        var data = new FormData(e.target);

        var req = await fetch('http://exbyte-studios.loc/api/create_user.php', {
            method: 'POST',
            body: data
        }).catch(err => console.log(err));

        var res = await req.json();

        if (res.status) {
            localStorage.setItem('data', JSON.stringify(res.data));
            setAuth(true);
        } else if (res.data.status === 'authorized') {
            setEdit(true);
        }
    }

    return (
        <form onSubmit={fetchLogin} className='login-form'>

            <div className='field'>
                <label htmlFor='login-login'>Логин</label>
                <input type='text' name='login' id='login-login' />
            </div>

            <div className='field'>
                <label htmlFor='login-password'>Password</label>
                <input type='password' name='password' id='login-password' />
            </div>

            <button type='submit'>Login</button>
        </form>
    )
}