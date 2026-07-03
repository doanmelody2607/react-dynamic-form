import classNames from 'classnames/bind';
import { FC, PropsWithChildren } from 'react';
import Header from '~/layouts/components/Header';
import styles from './HeaderOnly.module.scss';

const cx = classNames.bind(styles);

type HeaderOnlyProps = PropsWithChildren;

const HeaderOnly: FC<HeaderOnlyProps> = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
};

export default HeaderOnly;
