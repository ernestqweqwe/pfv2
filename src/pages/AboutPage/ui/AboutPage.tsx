import { useTranslation } from 'react-i18next';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

const AboutPage = () => {
    const { t } = useTranslation('about');
    return (
        <div>
            <h1>{t('О сайте')}</h1>
        </div>
    );
};

export default AboutPage;
