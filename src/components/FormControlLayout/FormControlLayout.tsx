import { FC } from 'react';
import classNames from 'classnames';
import useStyles from './styles';

export interface Props {
  errorText?: string;
  layoutClassName?: string;
}

const FormControlLayout: FC<Props> = (props) => {
  const { errorText, layoutClassName, children } = props;
  const classes = useStyles();
  return <div className={classNames(classes.container, layoutClassName)}>{children}</div>;
};

export default FormControlLayout;
