import { FC, useCallback } from 'react';
import { Formik, FormikErrors, FormikHelpers } from 'formik';
import Grid from '@material-ui/core/Grid';
import Button from '../Button';
import { InputFormField } from '../Input';
import FormTitle from '../FormTitle';
import { InputNumberFormField } from '../InputNumber';
import { InputListFormField } from '../InputList';
import { CheckboxListFormField } from '../CheckboxList';
import { skillsOptions, marriageOptions, citiesOptions } from '../../contst/options';
import { SelectFormField } from '../Select';

interface Form {
  name: string;
  age: string;
  education: string[];
  skills: number[];
  marriage: number;
  birthdayPlace: number;
}

const initialValues: Form = {
  name: '',
  age: '',
  education: [''],
  skills: [],
  marriage: 2,
  birthdayPlace: 0,
};

const validate = (values: Form) => {
  const errors: FormikErrors<any> = {};
  if (values.education.some((item) => !item)) {
    errors.education = 'Есть незаполненные ВУЗы';
  }
  return errors;
};

const Root: FC = () => {
  const onSubmit = useCallback(async (values: Form, helpers: FormikHelpers<Form>) => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log(values);
    helpers.resetForm();
  }, []);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
        enableReinitialize>
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
                <Grid item xs={12} sm={3}>
                  <FormTitle required>Семейное положение</FormTitle>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <SelectFormField name="marriage" required options={marriageOptions} />
                </Grid>
                <Grid item xs={12} sm={5} />
                <Grid item xs={12} sm={3}>
                  <FormTitle>ВУЗ</FormTitle>
                </Grid>
                <Grid item xs={12} sm={7}>
                  <InputListFormField
                    name="education"
                    placeholder="Например, ВолгГАСУ"
                    helperText="Укажите учебные заведения, в которых вы учились"
                  />
                </Grid>
                <Grid item xs={12} sm={2} />
                <Grid item xs={12} sm={3}>
                  <FormTitle>Место рождения</FormTitle>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <SelectFormField name="birthdayPlace" required options={citiesOptions} />
                </Grid>
                <Grid item xs={12} sm={5} />
                <Grid item xs={12} sm={3}>
                  <FormTitle>Навыки</FormTitle>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CheckboxListFormField
                    name="skills"
                    options={skillsOptions}
                    helperText="Отметьте ваши навыки"
                  />
                </Grid>
                <Grid item xs={12} sm={3} />
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
