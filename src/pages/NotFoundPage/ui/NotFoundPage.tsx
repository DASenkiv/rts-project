import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
    const { className, children, ...otherProps } = props;
    const { t } = useTranslation();

    return (
        <div
            className={classNames(cls.notFoundPage, {}, [className])}
            {...otherProps}
        >
            {t('pageNotFound')}
        </div>
    );
};
