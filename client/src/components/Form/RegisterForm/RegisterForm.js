import './registerform.sass';

export function RegisterForm() {

    const fetchRegister = async e => {
        e.preventDefault();

        var data = new FormData(e.target);

        var req = await fetch('http://exbyte-studios.loc/api/create_user.php', {
            method: 'POST',
            body: data
        });

        var res = await req.text();
        console.log(res);
    }

    return (
        <form onSubmit={fetchRegister} className='register-form'>

            <div className='field'>
                <label htmlFor='register-login'>Логин</label>
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

            <button type='submit'>Create Account</button>
        </form>
    )
}