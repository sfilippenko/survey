import makeStyles from '@material-ui/core/styles/makeStyles';
import { COLORS } from '../../styles/consts';

export default makeStyles({
  button: {
    border: 'none',
    borderRadius: 4,
    outline: 'none',
    margin: 0,
    padding: '12px 20px',
    backgroundColor: COLORS.YELLOW,
    fontSize: 16,
    '&:disabled': {
      backgroundColor: COLORS.YELLOW_LIGHT,
      color: COLORS.GREY,
    },
  },
});
