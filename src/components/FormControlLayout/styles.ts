import makeStyles from '@material-ui/core/styles/makeStyles';
import { COLORS } from '../../styles/consts';

export default makeStyles({
  container: {},

  subText: {
    fontSize: 12,
    marginTop: 4,
  },

  error: {
    color: COLORS.RED,
  },

  helperText: {
    color: COLORS.GREY,
  },
});
