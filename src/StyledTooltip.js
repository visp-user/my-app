// https://stackoverflow.com/questions/36759985/how-to-style-material-ui-tooltip
// https://stackoverflow.com/questions/71645570/how-to-pass-a-custom-component-to-title-props-in-mui-tooltip
import Tooltip from '@mui/material/Tooltip';
import { withStyles } from '@material-ui/core/styles';

const StyledTooltip = withStyles({
  tooltip: {
    color: 'black',
    backgroundColor: 'yellow',
  },
})(Tooltip);

export default StyledTooltip;
