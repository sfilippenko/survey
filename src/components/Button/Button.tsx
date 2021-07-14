import { FC, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import useStyles from './styles';

const Button: FC<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = ({
  children,
  className,
  ...rest
}) => {
  const classes = useStyles();
  return (
    <button className={classNames(classes.button, className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
