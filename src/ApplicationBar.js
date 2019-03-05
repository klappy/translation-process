import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';

const ApplicationBar = ({
  classes,
}) => {
  const title = 'Gateway Language Translation Process'
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <img className={classes.logo} src="./logo.png" alt="unfoldingWord" />
          <Typography variant="h6" color="inherit">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

ApplicationBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = {
  root: {
    flexGrow: 1,
  },
  logo: {
    height: '1.8em',
    paddingRight: '0.5em',
  },
};

export default withStyles(styles)(ApplicationBar);
