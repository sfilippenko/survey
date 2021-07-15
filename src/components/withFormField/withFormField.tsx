import { ComponentType, FC, memo, useCallback } from 'react';
import { Field, FieldProps } from 'formik';
import FormControlLayout, { FormControlLayoutProps } from '../FormControlLayout';
import { isEmpty } from '../../utils/validation';
import { errorHints } from '../../contst/validation';

interface MakeFormFieldProps<OnChange> extends FormControlLayoutProps {
  name: string;
  onChange?: OnChange;
  disabled?: boolean;
  required?: boolean;
}

function withFormField<Props, OnChange, Value = (value: any) => void>(
  Component: ComponentType<Props>,
) {
  const FormField: FC<MakeFormFieldProps<OnChange> & Omit<Props, 'value' | 'onChange'>> = (
    props,
  ) => {
    const { name, disabled, onChange: onChangeProp, required, helperText, ...rest } = props;

    const validate = useCallback(
      (value: any) => {
        if (required && isEmpty(value)) {
          return errorHints.required;
        }
      },
      [required],
    );

    return (
      <Field name={name} validate={validate}>
        {(fieldProps: FieldProps<Value>) => {
          const { field, form, meta } = fieldProps;

          const onChange =
            onChangeProp ||
            ((value: Value) => {
              form.setFieldValue(field.name, value);
            });

          const handleBlur = () => {
            form.setFieldTouched(field.name, true);
          };

          const calculatedErrorText = (() => {
            return meta.touched ? meta.error : '';
          })();

          return (
            <FormControlLayout errorText={calculatedErrorText} helperText={helperText}>
              <Component
                onBlur={handleBlur}
                name={name}
                disabled={form.isSubmitting || disabled}
                error={!!calculatedErrorText}
                value={field.value}
                onChange={onChange as OnChange}
                {...(rest as any)}
              />
            </FormControlLayout>
          );
        }}
      </Field>
    );
  };
  return memo(FormField);
}

export default withFormField;
