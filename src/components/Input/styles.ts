import makeStyles from '@material-ui/core/styles/makeStyles';
import {
  COLORS,
  CONTROL_BORDER_RADIUS,
  CONTROL_FONT_SIZE,
  CONTROL_HEIGHT,
  CONTROL_PADDING_HORIZONTAL,
} from '../../styles/consts';

export default makeStyles({
  input: {
    width: '100%',
    height: CONTROL_HEIGHT,
    border: `1px solid ${COLORS.GREY}`,
    borderRadius: CONTROL_BORDER_RADIUS,
    padding: `0 ${CONTROL_PADDING_HORIZONTAL}px`,
    fontSize: CONTROL_FONT_SIZE,
    '&::placeholder': {
      color: COLORS.GREY,
    },
    '&:disabled': {
      backgroundColor: COLORS.GREY_LIGHT,
    },
  },
});
