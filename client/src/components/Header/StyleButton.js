import { useState } from 'react';
import { ThemeSwiper } from './ThemeSwiper.js';
import { LangSwiper } from './LangSwiper.js';

export function StyleButton() {

    const [open, setOpen] = useState(false);


    const changed = () => setOpen(old => !old);


    return (
        <div className='style-block'>
            <input type='checkbox' onChange={changed} />
            {
                open &&
                <div className='style-popup'>
                    <div>
                        <span>Theme:</span>
                        <ThemeSwiper />
                    </div>
                    <div>
                        <span>Language:</span>
                        <LangSwiper />
                    </div>
                </div>
            }
        </div>
    )
}