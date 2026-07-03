import classNames from 'classnames/bind';
import { FC, PropsWithChildren } from 'react';
import styles from './Menu.module.scss';

type MenuProps = PropsWithChildren<{
    className?: string;
}>;

const cx = classNames.bind(styles);

const Menu: FC<MenuProps> = ({ children, className }) => {
    const classes = cx('wrapper', className);

    return <nav className={classes}>{children}</nav>;
};

export default Menu;
