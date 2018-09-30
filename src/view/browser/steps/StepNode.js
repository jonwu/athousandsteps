import React, { Component } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import { View } from 'view/global/components';
import { updateNode, addNode } from 'common/reducers/app/actions';
import { PREFIX, CHALLENGE } from 'common/utils/constants';

class StepNode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localResponse: props.node.localResponse,
    }
  }
  onSubmit = (e) => {
    const { localResponse } = this.state;
    const { nodeIndex, nodesLength, updateNode, addNode, node } = this.props;

    const updatedNode = Object.assign({}, node, {
      response: localResponse,
      active: false,
    });

    updateNode(nodeIndex, updatedNode);
    if (nodeIndex === nodesLength - 1) {
      addNode({
        prefix: PREFIX.BECAUSE,
        challenge: CHALLENGE.WHY,
        active: true,
      });
    }

    e.preventDefault();
  }
  render() {
    const { gstyles, theme, node } = this.props;
    const { localResponse } = this.state;

    return (
      <View style={{
        flex: 1,
        backgroundColor: node.active ? theme.blue() : theme.blue(0.5),
        padding: theme.spacing_2,
        borderRadius: theme.borderRadius,
        margin: theme.spacing_2
      }}>
        <div style={[gstyles.p1, { color: theme.text(0.5) }]}>{node.prefix}</div>
        <form onSubmit={this.onSubmit}>
          <input value={localResponse} onChange={(e) => this.setState({ localResponse: e.target.value })} />
        </form>
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
  { updateNode, addNode }
)(Radium(StepNode));