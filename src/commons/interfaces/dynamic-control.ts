import { RegisterOptions } from 'react-hook-form';
import { FieldType, FieldVariant } from '~/commons/types/input';
import { IconNames } from '~/commons/types/icon';

export interface Option {
    value: any;
    label: string;
}

export interface InputRange {
    xs: number;
    sm: number;
}

export interface DynamicFieldData {
    inputType: FieldType;
    label: string;
    fieldName: string;
    placeholder?: string;
    defaultValue: any;
    variant?: FieldVariant;
    range: InputRange;
    icon?: IconNames;
    fullWidth?: boolean;
    options?: Option[];
    config?: RegisterOptions;
}
