import classNames from 'classnames/bind';
import styles from './Form.module.scss';
import { Grid } from '@mui/material';
import { FC } from 'react';
import { DynamicFieldData } from '~/commons/interfaces/dynamic-control';
import DynamicControl from './DynamicControl';

const cx = classNames.bind(styles);

interface FormProps {
    fields: DynamicFieldData[];
}

const Form: FC<FormProps> = ({ fields }) => {
    return (
        <Grid className={cx('wrapper')} container spacing={3}>
            {fields.map((field, index) => (
                <DynamicControl key={index} {...field} />
            ))}
        </Grid>
    );
};

export default Form;
