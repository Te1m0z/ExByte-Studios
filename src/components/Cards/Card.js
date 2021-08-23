import { useTranslation } from 'react-i18next';
import './card.sass';

export function Card({ name }) {

    const [ t ] = useTranslation('home');

    return (
        <div className='card'>
            <div className='card__header'>
                <h3>{t('text')}</h3>
            </div>
        </div>
    )
}