import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

import connectComponent from '../helpers/connect-component';

import { updateSearchBox } from '../state/root/search-box/actions';

import history from '../history';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 590,
    display: 'flex',
  },
  container: {
    flexGrow: 1,
    position: 'relative',
  },
  inputRoot: {
    backgroundColor: theme.palette.background.paper,
    border: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: 0,
    borderRadius: 4,
    boxShadow: theme.shadows[2],
  },
  input: {
    width: '100%',
  },
  inputAdornment: {
    maxHeight: 'none',
  },
  popper: {
    zIndex: 1200,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
});

const SearchBox = ({ classes, searchBoxInputValue, onUpdateSearchBox }) => (
  <TextField
    fullWidth
    InputProps={{
      disableUnderline: true,
      classes: {
        root: classes.inputRoot,
        input: classes.input,
      },
      endAdornment: (
        <InputAdornment
          position="end"
          className={classes.inputAdornment}
          onClick={() => {
            history.push(`/search/${searchBoxInputValue}`);
          }}
        >
          <IconButton aria-label="Search">
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      ),
      placeholder: 'Search',
      value: searchBoxInputValue,
      onChange: (e) => {
        onUpdateSearchBox(e.target.value);
      },
      onKeyPress: (ev) => {
        if (ev.key === 'Enter') {
          ev.preventDefault();
          history.push(`/search/${searchBoxInputValue}`);
        }
      },
    }}
  />
);

SearchBox.defaultProps = {
  searchBoxInputValue: null,
};

SearchBox.propTypes = {
  classes: PropTypes.object.isRequired,
  searchBoxInputValue: PropTypes.string,
  onUpdateSearchBox: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  searchBoxInputValue: state.searchBox.inputValue,
});

const actionCreators = {
  updateSearchBox,
};


export default connectComponent(
  SearchBox,
  mapStateToProps,
  actionCreators,
  styles,
);
