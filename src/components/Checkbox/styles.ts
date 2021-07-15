import makeStyles from '@material-ui/core/styles/makeStyles';
import { COLORS } from '../../styles/consts';

export default makeStyles({
  label: {
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  labelText: {
    marginLeft: 12,
    marginRight: 4,
  },
  checkbox: {
    padding: 0,
  },
  colorSecondary: {
    color: COLORS.GREY,
  },
  checked: {
    color: `${COLORS.YELLOW} !important`,
  },
  disabled: {
    opacity: 0.5,
  },
});
