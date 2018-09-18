import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import { View, RouteWithSubRoutes } from 'view/global/components';
import { generateStylesSelector } from 'view/global/utils/selectors';

function generateStyles(theme) {
  return {}
}
class Item extends PureComponent   {
  render() {
    const { data, onClick } = this.props;
    console.log("Render", data.id)
    return <div onClick={onClick}>{data.a}</div>
  }
}

class Home extends Component {
  state = {
    a: 1,
    b: 1,
    c: 1,
    list: [{id: 1, a:'hi'}, {id: 2, a:'hi'}, {id: 3, a:'hi'}, {id: 4, a:'hi'}],
  }
  constructor(props) {
    super(props)
    // this.generateList = this.generateList.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(this.state);
  }

  componentDidMount() {
    this.setState({
      a: 2,
      b: 2,
    })
    console.log(this.state)
    this.setState({
      c: 2,
    })
    this.setState({
      c: 4,
      list: [...this.state.list]
    })
  }

  render() {
    const { gstyles, theme, styles } = this.props;
    const { list } = this.state;
    const a = [...list];

    console.log(list[0] === a[0]);
    return (
      <View>
        {list.map((i, index) => <Item data={i} key={i.id} onClick={() => console.log("hi")}/>)}
        I'm a browser
      </View>
    );
  }
}

const stylesSelector = generateStylesSelector(generateStyles);
function mapStateToProps(state, ownProps) {
  return {
    theme: state.settings.theme,
    gstyles: state.settings.gstyles,
    styles: stylesSelector(state.settings.theme),
  };
}

export default connect(
  mapStateToProps,
)(Radium(Home));
