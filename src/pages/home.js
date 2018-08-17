import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


import SearchBox from '../shared/search-box';

import iconSvg from '../assets/icon.svg';

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
  },
  main: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.unit,
  },
  innerMain: {
    width: '100%',
    maxWidth: 590,
    textAlign: 'center',
  },
  icon: {
    height: 96,
    marginBottom: theme.spacing.unit,
  },
  headlineContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  headline: {
    fontWeight: 500,
  },
  blank: {
    height: 128,
  },
});

class Home extends React.Component {
  componentDidMount() {
    document.title = 'RawTube';
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.main}>
          <div className={classes.innerMain}>
            <img src={iconSvg} alt="RawTube" className={classes.icon} />
            <div className={classes.headlineContainer}>
              <Typography variant="headline" className={classes.headline}>
                RawTube
              </Typography>
              <Typography variant="subheading">
                YouTube without Distractions
              </Typography>
            </div>
            <SearchBox />
            <div className={classes.blank} />
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
