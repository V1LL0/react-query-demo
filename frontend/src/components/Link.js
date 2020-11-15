import React from 'react';
import PropTypes from 'prop-types';

import history from 'historyInstance';
import { COLORS } from 'consts';

const Link = ({ title, link }) => (
  <a
    css={`
      color: ${COLORS.blueReactQuery};
      :hover {
        color: ${COLORS.redReactQuery};
      }
    `}
    onClick={() => history.push(link)}
  >
    {title}
  </a>
);

Link.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  link: PropTypes.string,
};

export default Link;
