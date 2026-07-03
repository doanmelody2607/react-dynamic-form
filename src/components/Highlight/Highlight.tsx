import classNames from 'classnames/bind';
import { FC } from 'react';
import styles from './Highlight.module.scss';

const cx = classNames.bind(styles);

type HighlightType = 'xanh' | 'do' | 'vang';

interface HighlightProps {
    content: string;
    highlightType?: HighlightType;
}

const Highlight: FC<HighlightProps> = ({ content, highlightType = 'vang' }) => {
    const classes = cx('wrapper', {
        [highlightType]: highlightType,
    });
    return <span className={classes}>{content}</span>;
};

export default Highlight;
