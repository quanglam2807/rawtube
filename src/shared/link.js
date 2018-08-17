import React from 'react';
import PropTypes from 'prop-types';

import history from '../history';

const Link = (props) => {
  const { href, children } = props;

  const onClick = (e) => {
    const aNewTab = e.metaKey || e.ctrlKey;
    const anExternalLink = href.startsWith('http');

    if (!aNewTab && !anExternalLink) {
      e.preventDefault();
      history.push(href);
    }
  };

  return (
    <a href={href} onClick={onClick}>
      {children}
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Link;
