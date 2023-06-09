import { FC } from 'react';
import * as Icons from '@mui/icons-material';

export type IconNames = keyof typeof Icons;
export interface IconProps {
    iconName: IconNames;
}

const DynamicIcon: FC<IconProps> = ({ iconName }) => {
    const Icon = Icons[iconName];
    return <Icon />;
};

export default DynamicIcon;
