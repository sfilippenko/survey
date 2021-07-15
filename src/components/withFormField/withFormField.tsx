import { ComponentType, FC, memo, useCallback, useRef } from 'react';
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

    const onChangeRef = useRef<any>();
    const onBlurRef = useRef<any>();

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

          if (!onChangeRef.current) {
            onChangeRef.current =
              onChangeProp ||
              ((value: Value) => {
                form.setFieldValue(field.name, value);
              });
          }

          if (!onBlurRef.current) {
            onBlurRef.current = () => {
              form.setFieldTouched(field.name, true);
            };
          }

          return (
            <FormControlLayout errorText={meta.touched ? meta.error : ''} helperText={helperText}>
              <Component
                onBlur={onBlurRef.current}
                name={name}
                disabled={form.isSubmitting || disabled}
                value={field.value}
                onChange={onChangeRef.current}
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
