import { Intro } from './Intro/Intro.js';
import { News } from './News/News.js';

import './home.sass';

export function Home() {

    return (
        <>
            <Intro />
            <News />
        </>
    )
}