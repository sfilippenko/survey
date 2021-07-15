import { FC, useMemo } from 'react';
import classNames from 'classnames';
import useStyles from './styles';

export interface Props {
  errorText?: string;
  layoutClassName?: string;
  helperText?: string;
}

const FormControlLayout: FC<Props> = (props) => {
  const { errorText, helperText, layoutClassName, children } = props;
  const classes = useStyles();

  const subText = useMemo(() => {
    if (errorText) {
      return <div className={classNames(classes.subText, classes.error)}>{errorText}</div>;
    }
    if (helperText) {
      return <div className={classNames(classes.subText, classes.helperText)}>{helperText}</div>;
    }
    return null;
  }, [errorText, helperText, classes]);

  return (
    <div className={classNames(classes.container, layoutClassName)}>
      <div>{children}</div>
      {subText}
    </div>
  );
};

export default FormControlLayout;
