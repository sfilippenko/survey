import { FC, useCallback } from 'react';
import { Formik } from 'formik';
import Grid from '@material-ui/core/Grid';
import Button from '../Button';
import { InputFormField } from '../Input';
import FormTitle from '../FormTitle';
import { InputNumberFormField } from '../InputNumber';

interface Form {
  name: string;
  age: string;
}

const initialValues: Form = {
  name: '',
  age: '',
};

const Root: FC = () => {
  const onSubmit = useCallback(async (values: Form) => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log(values);
  }, []);

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit, isSubmitting, dirty }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={3}>
                  <FormTitle required>Имя</FormTitle>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <InputFormField name="name" required />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <FormTitle required>Возраст</FormTitle>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <InputNumberFormField name="age" required />
                </Grid>
                <Grid item xs={12} sm={3} />
                <Grid item xs={12} sm={9}>
                  <Button type="submit" disabled={isSubmitting || !dirty}>
                    Отправить
                  </Button>
                </Grid>
              </Grid>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Root;
