import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import Link from '../shared/link';

import connectComponent from '../helpers/connect-component';

import { getItems, resetThenGetItems } from '../state/pages/search/actions';

const styles = theme => ({
  main: {
    flex: 1,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    display: 'inline-flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
  },
  card: {
    width: 240,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  media: {
    width: 240,
    height: 180,
  },
  content: {
    padding: '8px 12px !important',
  },
  ellipsis: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    marginBottom: 0,
  },
  progressContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing.unit * 2,
  },
});

class Search extends React.Component {
  componentDidMount() {
    const { onResetThenGetItems, param } = this.props;
    document.title = `${param} | RawTube`;
    onResetThenGetItems(param);
  }

  componentDidUpdate(prevProps) {
    const { onResetThenGetItems, param } = this.props;
    if (param !== prevProps.param) {
      document.title = `${param} | RawTube`;
      onResetThenGetItems(param);
    }
  }

  render() {
    const { classes, items, isGetting } = this.props;

    return (
      <React.Fragment>
        <div className={classes.main}>
          {items.map(item => (
            <Link href={`/v/${item.id.videoId}`} key={item.id.videoId}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={item.snippet.thumbnails.high.url}
                  title={item.snippet.title}
                />
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="subheading" component="p" className={classes.ellipsis}>
                    {item.snippet.title}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          ))}
          {isGetting && (
            <div className={classes.progressContainer}>
              <CircularProgress className={classes.progress} />
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

Search.defaultProps = {
  param: '',
};

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  onGetItems: PropTypes.func.isRequired,
  onResetThenGetItems: PropTypes.func.isRequired,
  isGetting: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  param: PropTypes.string,
};

const mapStateToProps = state => ({
  isGetting: state.pages.search.isGetting,
  items: state.pages.search.items,
  param: state.router.param,
});

const actionCreators = {
  getItems,
  resetThenGetItems,
};

export default connectComponent(
  Search,
  mapStateToProps,
  actionCreators,
  styles,
);
