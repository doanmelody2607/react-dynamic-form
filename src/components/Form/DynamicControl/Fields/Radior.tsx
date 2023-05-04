import {
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    Grid,
    Radio,
    RadioGroup,
} from '@mui/material';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { DynamicFieldData } from '~/commons/interfaces/dynamic-control';

const Radior: FC<DynamicFieldData> = ({
    label,
    fieldName,
    defaultValue,
    range,
    fullWidth = true,
    radioOptions = [],
    config = {},
}) => {
    const { control } = useFormContext();

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
                            <RadioGroup row>
                                {radioOptions.map((option, index) => (
                                    <FormControlLabel
                                        key={index}
                                        value={option.value}
                                        control={
                                            <Radio
                                                checked={value === option.value}
                                                onChange={() => onChange(option.value)} // send value to hook form
                                            />
                                        }
                                        label={option.label}
                                    />
                                ))}
                            </RadioGroup>
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

export default Radior;
