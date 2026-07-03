import classNames from 'classnames/bind';
import { FC, PropsWithChildren } from 'react';
import Sidebar from '~/layouts/components/Sidebar';
import styles from './DefaultLayout.module.scss';
import Header from '../components/Header';

const cx = classNames.bind(styles);

type DefaultLayoutProps = PropsWithChildren;

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('right-section')}>
                    <Header className={cx('test')} />
                    <div className={cx('content')}>{children}</div>
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;
