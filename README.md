web app for game dev company

---

# scratchs

шаблон использования i18n в компонентах

+ import { useTranslation } from 'react-i18next';

export default TestComponent() {

    const [ t ] = useTranslation('home');

    return <span>{t('text-name')}</span>
}