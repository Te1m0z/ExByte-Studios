import { useTranslation } from 'react-i18next';

export function Gallery() {

    const [ t ] = useTranslation('gallery');
    
    return (
        <>
            <span>{t('title')}</span>

            <h2>gallery page</h2>
        </>
    )
}