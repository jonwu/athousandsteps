import React, { Component } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import { View } from 'view/global/components';
import StepNode from './StepNode';


const ROW_SIZE = 4;

const computeColumnNodes = (nodes, rowSize = ROW_SIZE) => {
	const nodeLength = nodes.length;
	const columnNodes = [];
	let start = 0;

	while (start < nodeLength) {
		const end = start + rowSize;
		columnNodes.push(nodes.slice(start, end));
		start = end;
	}
	return columnNodes;
}

class StepNodeParent extends Component {
	constructor(props) {
		super(props);
	}

	static getDerivedStateFromProps(props, state) {
		if (props.nodes !== state.nodes) {
			return {
				nodes: props.nodes,
				columnNodes: computeColumnNodes(props.nodes),
			}
		}
		return null;
	}

	render() {
		const { gstyles, theme, nodes } = this.props;
		const { columnNodes } = this.state;
		const fontSize = Math.max(100 / nodes.length, theme.H4);
		return (
			<View style={{ flex: 1, flexDirection: 'column-reverse' }}>
				{columnNodes.map((column, x) => {
					return <View key={x} row style={{ flex: 1, flexDirection: 'row-reverse' }}>
						{column.map((node, y) => {
							const nodeIndex = x * ROW_SIZE + y;
							return <StepNode key={nodeIndex} node={node} nodeIndex={nodeIndex} nodesLength={nodes.length} fontSize={fontSize} />
						})}
					</View>
				})}
			</View>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		theme: state.settings.theme,
		gstyles: state.settings.gstyles,
		nodes: state.app.nodes,
	};
}

export default connect(
	mapStateToProps,
)(Radium(StepNodeParent));