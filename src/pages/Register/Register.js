import './register.sass';

export function Register() {

    const fetchData = async e => {
        e.preventDefault();

        var req = await fetch('http://exbyte-studios.loc/user/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: {
                "name": {
                    "value": "bonky"
                },
                "mail": {
                    "value": "bonky@gmail.com"
                },
                "pass": {
                    "value": "this_is_pass"
                }
            }
        });

        var res = await req.text();
        console.log(res);
    }

    const fetchArticles = async e => {
        e.preventDefault();

        let request = await fetch('http://exbyte-studios.loc/jsonapi/node/article');
        var response = await request.json();
        console.log(response);
    }

    return (
        <div>
            <form>
                <input type='text' name='name' />
                <input type='text' name='mail' />
                <input type='password' name='pass' />
                <button>Create account</button>
            </form>
            <button type='submit' onClick={fetchData} className='btn'>send fake data</button>
            <button type='submit' onClick={fetchArticles} className='btn'>Get all Articles</button>
        </div>
    )
}