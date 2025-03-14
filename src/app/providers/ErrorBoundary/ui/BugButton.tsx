import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const BugButton = () => {
    const [error, setError] = useState(false);
    const onThrow = () => setError(true);

    const { t } = useTranslation();

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);
    return (
        <Button
            onClick={onThrow}
            theme={ButtonTheme.CLEAR}
        >
            {t('throw error')}
        </Button>
    );
};
