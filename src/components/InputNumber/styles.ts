import makeStyles from '@material-ui/core/styles/makeStyles';
import { COLORS } from '../../styles/consts';

const buttonRadius = 4;

export default makeStyles({
  container: {
    display: 'flex',
  },

  input: {
    width: 100,
  },

  buttons: {
    width: 30,
    marginLeft: 8,
    display: 'flex',
    flexDirection: 'column',
  },

  button: {
    flex: 1,
    margin: 0,
    border: 'none',
    outline: 'none',
    backgroundColor: COLORS.GREY_LIGHT,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:disabled': {
      color: COLORS.GREY,
    },
    '&:hover': {
      '&:not(:disabled)': {
        cursor: 'pointer',
        backgroundColor: COLORS.YELLOW_HOVER,
      },
    },
    '&:active': {
      '&:not(:disabled)': {
        backgroundColor: `${COLORS.YELLOW_DARK} !important`,
      },
    },
  },

  buttonTop: {
    borderTopLeftRadius: buttonRadius,
    borderTopRightRadius: buttonRadius,
    borderBottom: `0.5px solid ${COLORS.GREY}`,
  },

  buttonBottom: {
    borderBottomLeftRadius: buttonRadius,
    borderBottomRightRadius: buttonRadius,
    borderTop: `0.5px solid ${COLORS.GREY}`,
  },
});
