import classNames from 'classnames/bind';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import Image from '~/components/Image';
import images from '~/assets/images';
import { useLocation } from 'react-router-dom';
import appRoutes from '~/config/routes';

const cx = classNames.bind(styles);

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
    const { pathname } = useLocation();
    const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);
    // const [expandedMenuId, setExpandedMenuId] = useState<string | null>(null);

    const [expandedMenus, setExpandedMenus] = useState<Set<string>>(new Set());

    // Hiệu ứng Sidebar
    useEffect(() => {
        setIsOpenSidebar(true);
    }, []);

    // Toggle submenu
    // const handleToggle = useCallback((id: string) => {
    //     setExpandedMenuId((prev) => (prev === id ? null : id));
    // }, []);

    const handleToggle = useCallback((id: string) => {
        setExpandedMenus((prev) => {
            const next = new Set(prev);

            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }

            return next;
        });
    }, []);

    // Tự mở menu cha khi URL nằm trong submenu
    // useEffect(() => {
    //     const parent = menuItems.find((item) =>
    //         item.children?.some((child) => child.to === pathname),
    //     );

    //     if (parent) {
    //         setExpandedMenuId(parent.id);
    //     }
    // }, [pathname]);

    useEffect(() => {
        const next = new Set<string>();

        const findParent = (menus: typeof appRoutes): boolean => {
            for (const menu of menus) {
                if (menu.children?.some((child) => child.path === pathname)) {
                    next.add(menu.id);
                    return true;
                }

                if (menu.children && findParent(menu.children)) {
                    next.add(menu.id);
                    return true;
                }
            }

            return false;
        };

        findParent(appRoutes);

        if (next.size > 0) {
            setExpandedMenus(next);
        }
    }, [pathname]);

    // Render menu
    const renderedMenus = useMemo(() => {
        return appRoutes.map((menu) => (
            <MenuItem
                key={menu.id}
                menuItem={menu}
                level={0}
                expandedMenus={expandedMenus}
                onToggle={handleToggle}
            />
        ));
    }, [expandedMenus, handleToggle]);

    return (
        <aside className={cx('wrapper', { open: isOpenSidebar })}>
            <div className={cx('sidebar-header')}>
                <Image className={cx('co-dang')} src={images.coDang} alt="Cờ Đảng" />
                <div>
                    <h2 className={cx('title')}>ĐIỀU HÀNH TÁC NGHIỆP</h2>
                    <p className={cx('description')}>Đảng ủy xã Diên Lâm - tỉnh Khánh Hòa</p>
                </div>
            </div>

            <Menu className={cx('menu-wrapper')}>{renderedMenus}</Menu>
        </aside>
    );
};

export default Sidebar;
