import makeStyles from '@material-ui/core/styles/makeStyles';
import { COLORS, CONTROL_BORDER_RADIUS, CONTROL_HEIGHT } from '../../styles/consts';

export default makeStyles({
  input: {
    height: CONTROL_HEIGHT,
    border: `1px solid ${COLORS.GREY}`,
    borderRadius: CONTROL_BORDER_RADIUS,
  },
});
