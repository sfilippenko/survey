import { FC, useCallback, ChangeEvent, ReactNode } from 'react';
import CheckboxLib, { CheckboxProps } from '@material-ui/core/Checkbox';
import useStyles from './styles';

export interface Params {
  customId?: any;
}

export interface Props extends Omit<CheckboxProps, 'checked' | 'onChange'> {
  value: boolean;
  onChange: (value: boolean, params: Params) => void;
  label: ReactNode;
  customId?: any;
}

const Checkbox: FC<Props> = (props) => {
  const { value, onChange, customId, label, ...rest } = props;
  const classes = useStyles();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>, checked: boolean) => {
      onChange(checked, { customId });
    },
    [onChange, customId],
  );

  return (
    <div>
      <label className={classes.label}>
        <CheckboxLib
          classes={{
            root: classes.checkbox,
            checked: classes.checked,
            colorSecondary: classes.colorSecondary,
            disabled: classes.disabled,
          }}
          checked={value}
          onChange={handleChange}
          {...rest}
        />
        <span className={classes.labelText}>{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
