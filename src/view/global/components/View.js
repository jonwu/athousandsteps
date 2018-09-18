import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

class View extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    const { style, row, className, onClick, onMouseOver, onMouseDown, dataTip, id } = this.props;
    const flexStyle = {
      display: 'flex',
      flexDirection: row ? 'row' : 'column',
    };
    return (
      <div
        onClick={onClick}
        onMouseOver={onMouseOver}
        onMouseDown={onMouseDown}
        className={className}
        id={id}
        data-tip={dataTip}
        style={Array.isArray(style) ? [flexStyle, ...style] : [flexStyle, style]}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Radium(View);
