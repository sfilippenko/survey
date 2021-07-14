import { FC, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

const Button: FC<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = ({
  children,
  ...rest
}) => {
  return <button {...rest}>{children}</button>;
};

export default Button;
