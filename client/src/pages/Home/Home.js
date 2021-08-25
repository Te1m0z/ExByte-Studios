import { Intro } from './Intro/Intro.js';

import './home.sass';

export function Home() {

    const fetchData = e => {
        e.preventDefault();

        var dataToPost = '{"name": {"value": "bonky"}, "mail": {"value": "test@mail.ru"}, "pass": {"value": "parol123"}}';

        fetch('http://drupal-backend.loc/user/register?format_json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: dataToPost
        }).then(res => res.json()).then(res => console.log(res))
    }

    return (
        <>
            <Intro />
        </>
    )
}