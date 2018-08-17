import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import PropTypes from 'prop-types';

import ConfiguredAppBar from './shared/configured-app-bar';
import Home from './pages/home';
import Search from './pages/search';
import Video from './pages/video';

import history from './history';

import connectComponent from './helpers/connect-component';

import { updateRouter } from './state/root/router/actions';
import { getItems } from './state/pages/search/actions';

const styles = {
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '100%',
  },
};

const pages = {
  '/home': Home,
  '/search': Search,
  '/v': Video,
};

class App extends React.Component {
  componentDidMount() {
    const {
      onUpdateRouter, onGetItems,
    } = this.props;

    history.onChange((pathname) => {
      onUpdateRouter(pathname);
    });

    window.onscroll = () => {
      const scrollTop = Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop,
        0,
      );
      const scrollHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        0,
      );
      const offsetHeight = Math.max(
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        0,
      );


      // Plus 300 to run ahead.
      if (scrollTop + 300 >= scrollHeight - offsetHeight) {
        const {
          path, param,
        } = this.props;

        if (path === '/search') {
          onGetItems(param);
        }
      }
    };
  }

  render() {
    const { classes, darkTheme, path } = this.props;
    const theme = createMuiTheme({
      palette: {
        type: darkTheme ? 'dark' : 'light',
      },
    });

    const Handler = pages[path] || Home;

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.root}>
          <ConfiguredAppBar minimal={path === '/'} />
          <Handler />
        </div>
      </MuiThemeProvider>
    );
  }
}

App.defaultProps = {
  param: null,
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
  darkTheme: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  param: PropTypes.string,
  onUpdateRouter: PropTypes.func.isRequired,
  onGetItems: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  darkTheme: state.preferences.darkTheme,
  path: state.router.path,
  param: state.router.param,
});

const actionCreators = {
  updateRouter,
  getItems,
};

export default connectComponent(
  App,
  mapStateToProps,
  actionCreators,
  styles,
);
