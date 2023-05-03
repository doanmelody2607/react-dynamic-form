import { Grid, TextField } from '@mui/material';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { DynamicFieldData } from '~/commons/interfaces/dynamic-control';

const Textarea: FC<DynamicFieldData> = ({
    label,
    fieldName,
    placeholder,
    defaultValue,
    variant,
    range,
    fullWidth = true,
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
                        <TextField
                            multiline
                            label={label}
                            placeholder={placeholder}
                            variant={variant}
                            fullWidth={fullWidth}
                            minRows={3}
                            required={!!config.required}
                            error={!!error}
                            helperText={error && `${label} ${error?.message}`}
                            {...field}
                        />
                    );
                }}
                rules={config}
            />
        </Grid>
    );
};

export default Textarea;
