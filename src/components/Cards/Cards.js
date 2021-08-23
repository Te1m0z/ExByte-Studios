import { Card } from './Card.js';

export function Cards() {

    const cards = [
        { name: 'test name', text: 'this is test text on cart' },
        // { name: 'i am a teimoz', text: 'lets get started' },
        // { name: 'hello world', text: 'now it comes' }
    ];

    return (
        <div className='cards'>
            {cards.map((el, idx) => <Card name={el.name} text={el.text} key={idx} />)}
        </div>
    )
}