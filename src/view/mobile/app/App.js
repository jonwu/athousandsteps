import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import { View, RouteWithSubRoutes } from 'view/global/components';
import { generateStylesSelector } from 'view/global/utils/selectors';
import routes from './routes';

function generateStyles(theme) {
  return {}
}
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { gstyles, theme, styles } = this.props;
    return (
      <View>
        {/*  Top Bar here */}
        {routes.map((route, i) => {
          return <RouteWithSubRoutes key={i} {...route} />;
        })}
        {/*  Bottom Bar here */}
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
)(Radium(App));
