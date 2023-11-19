import Tooltip from '@mui/material/Tooltip';
import { withStyles } from '@material-ui/core/styles';

const StyledTooltip = withStyles({
  tooltip: {
    color: 'black',
    backgroundColor: 'yellow',
  },
})(Tooltip);

export default StyledTooltip;
