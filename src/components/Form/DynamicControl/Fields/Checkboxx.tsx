import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormHelperText,
    FormLabel,
    Grid,
} from '@mui/material';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { DynamicFieldData } from '~/commons/interfaces/dynamic-control';

export type CheckboxId = string | number | boolean;

const Checkboxx: FC<DynamicFieldData> = ({
    label,
    fieldName,
    defaultValue,
    range,
    fullWidth = true,
    radioOptions = [],
    config = {},
}) => {
    const { control } = useFormContext();

    const handleCheck = (idChecked: CheckboxId, values: CheckboxId[] = []) => {
        const newValues = values?.includes(idChecked)
            ? values?.filter((id) => id !== idChecked)
            : [...values, idChecked];
        return newValues;
    };

    return (
        <Grid xs={range.xs} sm={range.sm} item>
            <Controller
                control={control}
                name={fieldName}
                defaultValue={defaultValue}
                render={({ field: { value, onChange }, fieldState: { error } }) => {
                    return (
                        <FormControl
                            fullWidth={fullWidth}
                            required={!!config.required}
                            error={!!error}
                        >
                            <FormLabel>{label}</FormLabel>
                            <FormGroup row>
                                {radioOptions.map((option, index) => {
                                    return (
                                        <FormControlLabel
                                            key={index}
                                            control={
                                                <Checkbox
                                                    checked={value.includes(option.value)}
                                                    onChange={() =>
                                                        onChange(handleCheck(option.value, value))
                                                    }
                                                />
                                            }
                                            label={option.label}
                                        />
                                    );
                                })}
                            </FormGroup>
                            {error && (
                                <FormHelperText>{`${label} ${error?.message}`}</FormHelperText>
                            )}
                        </FormControl>
                    );
                }}
                rules={config}
            />
        </Grid>
    );
};

export default Checkboxx;
