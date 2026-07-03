import classNames from 'classnames/bind';
import { FC, PropsWithChildren } from 'react';
import styles from './Note.module.scss';

const cx = classNames.bind(styles);

type NoteType = 'tip' | 'warn' | 'danger';

type NoteProps = PropsWithChildren<{
    noteType: NoteType;
    className?: string;
}>;

const Note: FC<NoteProps> = ({ noteType, className = '', children }) => {
    const classes = cx('wrapper', {
        [className]: className,
        [noteType]: noteType,
    });

    return <div className={classes}>{children}</div>;
};

export default Note;
