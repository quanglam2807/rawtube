import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import ReactVideo from 'react-youtube';

import connectComponent from '../helpers/connect-component';

import { resetThenGetItem } from '../state/pages/video/actions';

const styles = theme => ({
  container: {
    width: '100%',
    padding: theme.spacing.unit * 2,
  },
  progressContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing.unit * 2,
  },
  videoContainer: {
    width: '100%',
    backgroundColor: theme.palette.common.black,
  },
  videoInnerContainer: {
    width: '100%',
    maxWidth: 640,
    marginLeft: 'calc(50vw - 320px)',
  },
  '@media screen and (max-width: 600px)': {
    videoInnerContainer: {
      marginLeft: 0,
    },
  },
});

class Video extends React.Component {
  componentDidMount() {
    const { onResetThenGetItem, param, item } = this.props;
    onResetThenGetItem(param);

    if (item) {
      document.title = `${item.snippet.title} | RawTube`;
    }
  }

  componentDidUpdate() {
    const { item } = this.props;

    if (item) {
      document.title = `${item.snippet.title} | RawTube`;
    }
  }

  render() {
    const {
      classes, item, param, isGetting,
    } = this.props;

    return (
      <React.Fragment>
        <div className={classes.videoContainer}>
          <div className={classes.videoInnerContainer}>
            <div className="videoWrapper">
              <ReactVideo videoId={param} />
            </div>
          </div>
        </div>
        {item && (
          <div className={classes.container}>
            <Typography variant="title">
              {item.snippet.title}
            </Typography>
            <Typography variant="body1">
              {item.snippet.description}
            </Typography>
          </div>
        )}
        {isGetting && (
          <div className={classes.progressContainer}>
            <CircularProgress className={classes.progress} />
          </div>
        )}
      </React.Fragment>
    );
  }
}

Video.defaultProps = {
  param: '',
  item: null,
};

Video.propTypes = {
  classes: PropTypes.object.isRequired,
  onResetThenGetItem: PropTypes.func.isRequired,
  isGetting: PropTypes.bool.isRequired,
  item: PropTypes.object,
  param: PropTypes.string,
};

const mapStateToProps = state => ({
  isGetting: state.pages.search.isGetting,
  item: state.pages.video.item,
  param: state.router.param,
});

const actionCreators = {
  resetThenGetItem,
};

export default connectComponent(
  Video,
  mapStateToProps,
  actionCreators,
  styles,
);
