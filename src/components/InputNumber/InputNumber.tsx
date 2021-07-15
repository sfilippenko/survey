import { FC } from 'react';
import classNames from 'classnames';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import useStyles from './styles';
import Input, { InputProps } from '../Input';

export interface Props extends Omit<InputProps, 'type' | 'min' | 'step'> {
  containerClassName?: string;
}

const InputNumber: FC<Props> = (props) => {
  const { onChange, containerClassName, value, className, disabled, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={classNames(classes.container, containerClassName)}>
      <Input
        type="number"
        className={classNames(classes.input, className)}
        value={value}
        onChange={onChange}
        disabled={disabled}
        min="0"
        step="1"
        {...rest}
      />
      <div className={classes.buttons}>
        <button
          onClick={() => onChange(String(Number(value) + 1))}
          type="button"
          disabled={disabled}
          className={classNames(classes.button, classes.buttonTop)}>
          <ArrowDropUpIcon fontSize="small" />
        </button>
        <button
          onClick={() => Number(value) >= 1 && onChange(String(Number(value) - 1))}
          type="button"
          disabled={disabled || Number(value) < 1}
          className={classNames(classes.button, classes.buttonBottom)}>
          <ArrowDropDownIcon fontSize="small" />
        </button>
      </div>
    </div>
  );
};

export default InputNumber;
