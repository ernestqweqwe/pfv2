import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkThem {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps{
    className?: string
    theme?:AppLinkThem
}

export const AppLink:FC<AppLinkProps> = (props) => {
    const {
        to, children, className, theme = AppLinkThem.PRIMARY, ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.appLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
