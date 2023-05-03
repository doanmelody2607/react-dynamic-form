import { Grid, InputAdornment, TextField } from '@mui/material';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { DynamicFieldData } from '~/commons/interfaces/dynamic-control';
import DynamicIcon from '~/components/Form/DynamicControl/Icon';

const Number: FC<DynamicFieldData> = ({
    label,
    fieldName,
    placeholder,
    defaultValue,
    variant,
    range,
    icon,
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
                            type="number"
                            label={label}
                            placeholder={placeholder}
                            variant={variant}
                            fullWidth={fullWidth}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        {icon && <DynamicIcon iconName={icon} />}
                                    </InputAdornment>
                                ),
                                // inputProps: {
                                //     max: 100,
                                //     min: 10,
                                // },
                            }}
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

export default Number;
