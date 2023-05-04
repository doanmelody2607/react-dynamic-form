import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import { FC, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { DynamicFieldData } from '~/commons/interfaces/dynamic-control';

const Password: FC<DynamicFieldData> = ({
    label,
    fieldName,
    placeholder,
    defaultValue,
    variant = 'standard',
    range,
    fullWidth = true,
    config = {},
}) => {
    // React-hook-form
    const { control } = useFormContext();

    // Hook
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleClickShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <Grid xs={range.xs} sm={range.sm} item>
            <Controller
                control={control}
                name={fieldName}
                defaultValue={defaultValue}
                render={({ field, fieldState: { error } }) => {
                    return (
                        <TextField
                            type={showPassword ? 'text' : 'password'}
                            label={label}
                            placeholder={placeholder}
                            variant={variant}
                            fullWidth={fullWidth}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
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

export default Password;
