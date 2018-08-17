import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';

import MoreVertIcon from '@material-ui/icons/MoreVert';

import connectComponent from '../helpers/connect-component';

import EnhancedMenu from './enhanced-menu';
import SearchBox from './search-box';
import Link from './link';

import iconSvg from '../assets/icon.svg';

import { updatePreference } from '../state/root/preferences/actions';

const styles = theme => ({
  flex: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  icon: {
    height: 40,
  },
});

const ConfiguredAppBar = ({
  classes, minimal, darkTheme, path, param, onUpdatePreference,
}) => (
  <AppBar position="static" color="default" elevation={0}>
    <Toolbar>
      {!minimal && (
        <Link href="/">
          <img src={iconSvg} alt="RawTube" className={classes.icon} />
        </Link>
      )}
      {!document.referrer === '' && (
        <IconButton
          aria-owns={null}
          aria-haspopup="true"
          onClick={null}
          color="inherit"
        >
          <MoreVertIcon />
        </IconButton>
      )}
      <div className={classes.flex}>
        {!minimal && <SearchBox defaultInputValue={path === '/search' && param ? param : null} />}
      </div>
      <EnhancedMenu
        id="more"
        buttonElement={(
          <IconButton
            aria-owns={null}
            aria-haspopup="true"
            onClick={null}
            color="inherit"
          >
            <MoreVertIcon />
          </IconButton>
        )}
      >
        <MenuItem onClick={() => onUpdatePreference('darkTheme', !darkTheme)}>
          Toggle light/dark theme
        </MenuItem>
        <MenuItem onClick={() => { window.location.href = 'https://github.com/quanglam2807/rawtube/wiki/Privacy-Policy'; }}>
          Privacy
        </MenuItem>
        <MenuItem onClick={() => { window.location.href = 'https://github.com/quanglam2807/rawtube/wiki/About'; }}>
          About
        </MenuItem>
        <MenuItem onClick={() => { window.location.href = 'https://quanglam.me'; }}>
          Made with ❤ by Quang Lam.
        </MenuItem>
      </EnhancedMenu>
    </Toolbar>
  </AppBar>
);

ConfiguredAppBar.defaultProps = {
  minimal: false,
  param: null,
};

ConfiguredAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  minimal: PropTypes.bool,
  darkTheme: PropTypes.bool.isRequired,
  onUpdatePreference: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  param: PropTypes.string,
};

const mapStateToProps = state => ({
  darkTheme: state.preferences.darkTheme,
  path: state.router.path,
  param: state.router.param,
});

const actionCreators = {
  updatePreference,
};


export default connectComponent(
  ConfiguredAppBar,
  mapStateToProps,
  actionCreators,
  styles,
);
