import { FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { DynamicFieldData } from '~/commons/interfaces/dynamic-control';

const SingleSelect: FC<DynamicFieldData> = ({
    label,
    fieldName,
    defaultValue,
    variant = 'standard',
    range,
    fullWidth = true,
    selectOptions = [],
    config = {},
}) => {
    const { control } = useFormContext();

    return (
        <Grid xs={range.xs} sm={range.sm} item>
            <Controller
                control={control}
                name={fieldName}
                defaultValue={defaultValue}
                render={({ field, fieldState: { error } }) => {
                    return (
                        <FormControl
                            fullWidth={fullWidth}
                            variant={variant}
                            required={!!config.required}
                            error={!!error}
                        >
                            <InputLabel>{label}</InputLabel>
                            <Select {...field}>
                                {selectOptions.map((option, index) => (
                                    <MenuItem key={index} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
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

export default SingleSelect;
