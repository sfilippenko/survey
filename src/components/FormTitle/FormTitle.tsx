import { FC } from 'react';
import useStyles from './styles';

interface Props {
  required?: boolean;
}

const FormTitle: FC<Props> = (props) => {
  const { required, children } = props;
  const classes = useStyles();
  return (
    <div>
      {children}
      {required && <sup className={classes.suffix}>*</sup>}
    </div>
  );
};

export default FormTitle;
