rct
----
```
import React, { Component } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import { View } from 'view/global/components';

class $1 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { gstyles, theme } = this.props;
    return (
      <View>
      </View>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    theme: state.settings.theme,
    gstyles: state.settings.gstyles,
  };
}

export default connect(
  mapStateToProps,
)(Radium($1));
```


