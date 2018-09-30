import React, { Component } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';
import { View } from 'view/global/components';
import StepNode from './StepNode';


const ROW_SIZE = 8;

const computeColumnNodes = (nodes, rowSize = ROW_SIZE) => {
	const nodeLength = nodes.length;
	const columnNodes = [];
	let start = 0;

	while (start <= nodeLength) {
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
		return (
			<View style={{ flex: 1 }}>
				{columnNodes.map((column, x) => {
					return <View key={x} row style={{ flex: 1 }}>
						{column.map((node, y) => {
							return <StepNode key={x * ROW_SIZE + y} node={node} nodeIndex={x * ROW_SIZE + y} nodesLength={nodes.length} />
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