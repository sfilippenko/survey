import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    '&>*': {
      padding: '4px 0',
      width: 280,
    },
  },
});
