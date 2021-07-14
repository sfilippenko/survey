import { FC } from 'react';
import useStyles from './styles';

const Layout: FC = (props) => {
  const { children } = props;
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
};

export default Layout;
