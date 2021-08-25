import { NewsItem } from './NewsItem.js';

import './news.sass';

export function News() {

    var news = [
        {
            title: 'Hello World',
            descr: 'this is test description!!!'
        },
        {
            title: 'New Article',
            descr: 'who"s here'
        },
        {
            title: 'We Make New Logotype',
            descr: 'check out in bottom'
        }
    ]

    return (
        <section className='news-sec'>
            {news.map((el, idx) => (
                <NewsItem
                    title={el.title}
                    descr={el.descr}
                    key={idx}
                />
            ))}
        </section>
    )
}