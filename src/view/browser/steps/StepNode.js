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
      localResponse: props.response,
    }
  }
  static getDerivedStateFromProps(props, state) {
    if (props.node !== state.node) {
      return {
        node: props.node,
        localResponse: props.node.response || '',
      }
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
    // if (nodeIndex === nodesLength - 1) {
      addNode({
        prefix: PREFIX.BECAUSE,
        prev: updatedNode.response,
        challenge: CHALLENGE.WHY,
        active: true,
      });
    // }

    e.preventDefault();
  }
  componentDidMount() {
    const { node } = this.props;
    if (node.active) this.input.focus()
  }
  render() {
    const { gstyles, theme, node, fontSize, showAll } = this.props;
    const { localResponse } = this.state;

    return (
      <View style={{
        flex: 1,
        backgroundColor: node.active ? theme.red(0.75) : theme.blue(0.5),
        padding: theme.spacing_1,
        borderRadius: theme.borderRadius,
        margin: theme.spacing_2,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {node.active ? 
        <form style={{width: '100%'}} onSubmit={this.onSubmit}>
          <input
            style={[{
              border: 'none',
              width: '100%',
              outline: 0,
              background: 'transparent',
              fontSize: fontSize,
              fontFamily: 'Brandon',
              color: theme.light(),
              textAlign: 'center',
            }]}
            ref={input => this.input = input}
            value={localResponse}
            placeholder={node.prev && `${node.prev} ...why tho?`}
            onChange={(e) => this.setState({ localResponse: e.target.value })} />
        </form>
        : <div style={[{ fontSize: fontSize, color: theme.text() }]}>{node.response}</div>
        }
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