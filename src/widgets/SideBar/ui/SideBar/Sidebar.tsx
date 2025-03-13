import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkThem } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }:SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(
                cls.sidebar,
                { [cls.collapsed]: collapsed },
                [className],
            )}
        >
            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
                className={cls.collapsedBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.XL}
            >

                {collapsed ? '<' : '>'}
            </Button>

            <div className={cls.items}>
                <div>
                    <AppLink
                        className={cls.item}
                        theme={AppLinkThem.SECONDARY}
                        to={RoutePath.main}

                    >
                        <MainIcon className={cls.icon} />

                        <span
                            className={cls.link}
                        >
                            {t('Главная')}
                        </span>
                    </AppLink>
                </div>

                <div>

                    <AppLink
                        className={cls.item}
                        theme={AppLinkThem.SECONDARY}
                        to={RoutePath.about}

                    >
                        <AboutIcon
                            className={cls.icon}
                        />
                        <span
                            className={cls.link}
                        >
                            {t('О сайте')}
                        </span>
                    </AppLink>
                </div>

            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
};
