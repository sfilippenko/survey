import { FC, useCallback } from 'react';
import { Formik } from 'formik';
import Grid from '@material-ui/core/Grid';
import Button from '../Button';
import { InputFormField } from '../Input';

interface Form {
  name: string;
}

const initialValues: Form = {
  name: '',
};

const Root: FC = () => {
  const onSubmit = useCallback(async (values: Form) => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log(values);
  }, []);

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit, isSubmitting }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={3}>
                  Name
                </Grid>
                <Grid item xs={12} sm={3}>
                  <InputFormField name="name" />
                </Grid>
              </Grid>
              <Button type="submit" disabled={isSubmitting}>
                Отправить
              </Button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Root;
