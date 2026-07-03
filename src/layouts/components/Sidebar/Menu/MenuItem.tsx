import classNames from 'classnames/bind';
import { FC, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { AppRoute } from '~/commons/interfaces/routes';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

interface MenuItemProps {
    menuItem: AppRoute;
    level?: number;
    expandedMenus: Set<string>;
    onToggle(id: string): void;
}

const MenuItem: FC<MenuItemProps> = ({ menuItem, level = 0, expandedMenus, onToggle }) => {
    const hasChildren = !!menuItem.children?.length;

    const isExpanded = expandedMenus.has(menuItem.id);

    const handleClick = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement>) => {
            if (hasChildren) {
                e.preventDefault();
                onToggle(menuItem.id);
            }
        },
        [hasChildren, menuItem.id, onToggle],
    );

    return (
        <>
            <NavLink
                className={({ isActive }) =>
                    cx('menu-item', { active: isActive && !menuItem.children })
                }
                style={{ paddingLeft: `${10 + level * 20}px` }}
                to={menuItem.path ? menuItem.path : ''}
                end
                onClick={handleClick}
            >
                <div className={cx('menu-title')}>
                    <span className={cx('icon')}>{menuItem.icon}</span>
                    <span className={cx('label')}>{menuItem.title}</span>
                </div>

                {hasChildren && (
                    <span
                        className={cx('menu-dropdown', {
                            rotate: isExpanded,
                        })}
                    >
                        ▾
                    </span>
                )}
            </NavLink>

            {hasChildren && (
                <div className={cx('submenu', { expanded: isExpanded })}>
                    <div className={cx('submenu-inner')}>
                        {menuItem.children!.map((child) => (
                            <MenuItem
                                key={child.id}
                                menuItem={child}
                                level={level + 1}
                                expandedMenus={expandedMenus}
                                onToggle={onToggle}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default MenuItem;
