import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    to="/"
                    className={cls.mainLink}
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t('mainLink')}
                </AppLink>
                <AppLink
                    to="/about"
                    theme={AppLinkTheme.RED}
                >
                    {t('aboutUs')}
                </AppLink>
            </div>

        </div>
    );
}
