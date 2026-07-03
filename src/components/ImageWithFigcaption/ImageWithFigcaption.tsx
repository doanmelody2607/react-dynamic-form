import classNames from 'classnames/bind';
import { FC, PropsWithChildren } from 'react';
import styles from './ImageWithFigcaption.module.scss';

const cx = classNames.bind(styles);

type ImageWithFigcaptionProps = PropsWithChildren<{
    figcaption: string;
}>;

const ImageWithFigcaption: FC<ImageWithFigcaptionProps> = ({ figcaption, children }) => {
    return (
        <div className={cx('wrapper')}>
            {children}
            <div className={cx('figcaption')}>{figcaption}</div>
        </div>
    );
};

export default ImageWithFigcaption;
