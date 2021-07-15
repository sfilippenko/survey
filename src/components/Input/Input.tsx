import { ChangeEvent, FC, DetailedHTMLProps, InputHTMLAttributes, useCallback, memo } from 'react';
import classNames from 'classnames';
import useStyles from './styles';

export interface Params {
  customId?: any;
}

export interface Props
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'onChange'
  > {
  onChange: (values: string, params?: Params) => void;
  value: string;
  onBlur?: () => void;
  customId?: any;
}

const Input: FC<Props> = (props) => {
  const { value, onChange, onBlur, className, customId, ...rest } = props;
  const classes = useStyles();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value, { customId });
    },
    [onChange, customId],
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

export default memo(Input);
