import { FC } from 'react';
import './GlobalStyles.scss';

export interface childrenProps {
    children: React.ReactElement;
}

const GlobalStyles: FC<childrenProps> = ({ children }) => {
    return children;
};

export default GlobalStyles;
