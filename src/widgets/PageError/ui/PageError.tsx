import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string
}

export const PageError = ({ className }:PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.pageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <h1>
                <Button
                    type="submit"
                    onClick={reloadPage}
                    theme={ButtonTheme.CLEAR}
                >
                    {t('Обновить страницу')}
                </Button>
            </h1>
        </div>
    );
};
