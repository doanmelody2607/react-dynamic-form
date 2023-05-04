import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import Form from '~/components/Form';
import { fields } from './data';

export interface DataSubmit {
    name: string;
    address: string;
    phone: string;
    information: string;
    gender: string | number;
    hobbies: (string | number)[];
    email: string;
    status: boolean;
    friends: (string | number)[];
}

const App: FC = () => {
    console.log('List Fields: ', fields);
    const margin = { margin: '0 5px' };

    const formMethods = useForm({
        mode: 'onTouched',
    });

    const {
        handleSubmit,
        reset,
        formState: { isValid },
    } = formMethods;

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log('Form Submit: ', data);
    };

    const handleReset = () => {
        reset();
    };

    return (
        <div className="App">
            <Grid style={{ padding: '80px 5px 0 5px' }}>
                <Card variant="outlined" style={{ maxWidth: 1000, margin: '0 auto' }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <CardContent>
                            <Typography variant="h4" color="primary">
                                Create an Account
                            </Typography>

                            <Typography variant="subtitle1" color="textSecondary">
                                Fill all the mandatory fields to create an account.
                            </Typography>

                            <FormProvider {...formMethods}>
                                <Form fields={fields} />
                            </FormProvider>
                        </CardContent>

                        <CardActions
                            disableSpacing
                            sx={{
                                justifyContent: 'flex-end',
                            }}
                        >
                            <Button
                                style={margin}
                                type="button"
                                variant="contained"
                                color="error"
                                onClick={handleReset}
                            >
                                Reset
                            </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                disabled={!isValid}
                            >
                                Submit
                            </Button>
                        </CardActions>
                    </form>
                </Card>
            </Grid>
        </div>
    );
};

export default App;
