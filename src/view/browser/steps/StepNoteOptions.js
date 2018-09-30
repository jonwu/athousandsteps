import React, { Component } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import { View } from 'view/global/components';
import { PREFIX, CHALLENGE } from 'common/utils/constants';
import { resetNode } from 'common/reducers/app/actions';

class StepNodeOptions extends Component {
  constructor(props) {
    super(props);
    const { resetNode } = props;
    resetNode({
      prefix: PREFIX.INSECURITY,
      challenge: CHALLENGE.WHY,
      active: true,
    });
  }
  onCreate = () => {
    const { resetNode } = this.props;
    resetNode({
      prefix: PREFIX.INSECURITY,
      challenge: CHALLENGE.WHY,
      active: true,
    });
  }
  render() {
    const { gstyles, theme } = this.props;
    return null;
    return (
      <View row>
        <View onClick={this.onCreate} style={{
          cursor: 'pointer',
          padding: theme.spacing_2,
          backgroundColor: theme.red(0.5),
          borderRadius: theme.borderRadius,
        }}>
          <div style={[gstyles.p1, { color: theme.text() }]}>{PREFIX.INSECURITY}</div>
        </View>
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
  { resetNode }
)(Radium(StepNodeOptions));