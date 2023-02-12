import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string
}

export const PageError: FC<PageErrorProps> = (props) => {
    const { className, ...otherProps } = props;

    const { t } = useTranslation();

    const handleRefreshPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div
            className={classNames(cls.pageError, {}, [className])}
            {...otherProps}
        >
            <p>{t('pageErrorText')}</p>
            <Button onClick={handleRefreshPage}>{t('refreshPage')}</Button>
        </div>
    );
};
