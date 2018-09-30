import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import { View } from 'view/global/components';
import StepNoteOptions from 'view/browser/steps/StepNoteOptions';
import StepNodeParent from 'view/browser/steps/StepNodeParent';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { gstyles, theme, styles } = this.props;
    return (
      <View style={{backgroundColor: theme.bg(), flex: 1}}>
        <div style={[gstyles.h1_bold, { color: theme.text() }]}>How do you feel?</div>
        <StepNoteOptions/>
        <StepNodeParent/>    
        {/* 
          List of Root Node
            - prefix
            - response
            - question
          Every Node
            - prefix
            - response
            - question
          Example:
            I can't make money --> becasue I can't find a job --> because i am not qualified --> because i havne studied enough --> because i am low 
        */}
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
)(Radium(Home));
