import React, { Component } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import { View } from 'view/global/components';
import StepNodeParent from 'view/browser/steps/StepNodeParent';
import StepNode from 'view/browser/steps/StepNode';

class StepNodeController extends Component {
  state = {
    showAll: false,
  }

  render() {
    const { gstyles, theme, lastNode, nodeLength } = this.props;
    const { showAll } = this.state;
    console.log(lastNode)
    return (
      <View style={{ flex: 1, marginLeft: 100, marginBottom: 100, marginRight: 100 }}>
        <View style={{ height: 100, justifyContent: 'center'}}>
          <div onClick={() => this.setState({ showAll: !this.state.showAll })} className={'hvr-white'} style={[gstyles.h2_bold, {
            color: theme.text(0.5),
            alignSelf: 'center',
            cursor: 'pointer',
          }]}>{showAll ? 'Edit' : 'Show All'}</div>
        </View>
        {showAll ? <StepNodeParent /> : <StepNode node={lastNode} nodeLength={nodeLength} nodeIndex={nodeLength - 1} fontSize={80} />}
      </View>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    theme: state.settings.theme,
    gstyles: state.settings.gstyles,
    lastNode: state.app.nodes.slice(-1)[0],
    nodeLength: state.app.nodes.length,
  };
}

export default connect(
  mapStateToProps,
)(Radium(StepNodeController));