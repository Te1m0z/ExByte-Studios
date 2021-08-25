import {
    Cards
} from '../../../components/Cards/Cards.js';

import './intro.sass';

export function Intro() {

    return (
        <section className='intro-sec'>
            <div className='intro-sec__title'>
                <h1>
                    <span className='main'>Exbyte Studios</span>
                    <span className='bg'>Exbyte Studios</span>
                    <span className='bg'>Exbyte Studios</span>
                    <span className='bg'>Exbyte Studios</span>
                </h1>
            </div>
            <Cards />
        </section>
    )
}