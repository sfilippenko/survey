import makeStyles from '@material-ui/core/styles/makeStyles';
import { COLORS } from '../../styles/consts';

export default makeStyles({
  table: {
    width: '100%',
    borderSpacing: 0,
    borderCollapse: 'collapse',
    '& tr': {
      '& td': {
        paddingBottom: 20,
      },
      '&:last-child': {
        '& td': {
          paddingBottom: 0,
        },
      },
    },
  },

  cellPAdding: {
    paddingLeft: 12,
  },

  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    '&>*': {
      marginBottom: 20,
      marginRight: 12,
      '&:last-child': {
        marginBottom: 0,
        marginRight: 0,
      },
    },
  },

  addButtonText: {
    marginLeft: 8,
    fontSize: 16,
    whiteSpace: 'nowrap',
  },

  deleteIcon: {
    color: COLORS.RED,
  },
});
