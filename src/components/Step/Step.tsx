import classNames from 'classnames/bind';
import { FC, PropsWithChildren } from 'react';
import styles from './Step.module.scss';

const cx = classNames.bind(styles);

type StepProps = PropsWithChildren;

const Step: FC<StepProps> = ({ children }) => {
    return <ol className={cx('wrapper')}>{children}</ol>;
};

export default Step;
