import classNames from 'classnames/bind';
import { FC, PropsWithChildren } from 'react';
import styles from './Card.module.scss';

const cx = classNames.bind(styles);

type CardProps = PropsWithChildren<{
    cardTitle: string;
    description: string;
}>;

const Card: FC<CardProps> = ({ cardTitle, description, children }) => {
    return (
        <div className={cx('card')}>
            <h2>{cardTitle}</h2>
            <p>{description}</p>

            {children}
        </div>
    );
};

export default Card;
