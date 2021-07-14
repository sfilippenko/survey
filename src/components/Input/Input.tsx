import { ChangeEvent, FC, DetailedHTMLProps, InputHTMLAttributes, useCallback } from 'react';
import classNames from 'classnames';
import useStyles from './styles';

export interface Props
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'onChange'
  > {
  onChange: (values: string) => void;
  value: string;
  onBlur?: () => void;
}

const Input: FC<Props> = (props) => {
  const { value, onChange, onBlur, className, ...rest } = props;
  const classes = useStyles();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange],
  );

  return (
    <input
      className={classNames(classes.input, className)}
      onChange={handleChange}
      value={value}
      onBlur={onBlur}
      {...rest}
    />
  );
};

export default Input;
