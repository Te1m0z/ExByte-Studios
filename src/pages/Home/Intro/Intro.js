import {
    Cards
} from '../../../components/Cards/Cards.js';

import './intro.sass';

export function Intro() {

    return (
        <section className='intro-sec'>
            <div className='intro-sec__title'>
                <h1>
                    Exbyte Studios
                    <span>Exbyte Studios</span>
                    <span>Exbyte Studios</span>
                    <span>Exbyte Studios</span>
                </h1>
            </div>
            <Cards />
        </section>
    )
}