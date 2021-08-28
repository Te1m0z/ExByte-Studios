import { useEffect, useState } from 'react';
import { ThemeSwiper } from './ThemeSwiper.js';
import { LangSwiper } from './LangSwiper.js';

export function StyleButton() {

    // состояние попапа
    const [open, setOpen] = useState(false);

    // клик на инпут меняет состояние
    const changed = () => setOpen(old => !old);

    // функция проверки, содержится ли e.target в попапе  
    const handler = e => {

        console.log(e.target);

        let block = document.querySelector('.style-block');

        if (!block.contains(e.target)) {
            setOpen(false);
        }
    }

    useEffect(function() {

        open && document.addEventListener('click', handler);

        return () => document.removeEventListener('click', handler);

    }, [open]);

    return (
        <div className='style-block'>
            <input type='checkbox' onChange={changed} checked={open ? true : false} />
            <div className='style-popup' data-open={open ? true : false}>
                <div>
                    <span>Theme:</span>
                    <ThemeSwiper />
                </div>
                <div>
                    <span>Language:</span>
                    <LangSwiper />
                </div>
            </div>
        </div>
    )
}