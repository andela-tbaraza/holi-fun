import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as interestActions from '../actions/interestAction';

console.log('+++++++', interestActions);

class InterestsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      interest: { title: '' }
    };

    this.onInterestChange = this.onInterestChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onInterestChange(event) {
    const interest = this.state.interest;
    interest.title = event.target.value;
    this.setState = ({ interest: interest });
  }

  onClickSave() {
    // alert(`Saving ${this.state.interest.title}`);
    this.props.actions.createInterest(this.state.interest);
  }

  interestRow(interest, index) {
    return (
      <div key={index}>{interest.title}</div>
    );
  }
  render() {
    // debugger;
    return (
      <div>
        <h1>Interests</h1>
        {this.props.interests.map(this.interestRow)}
        <h2>Add interest</h2>
        <input type="text" onChange={this.onInterestChange} placeholder="title"/>
        <input type="submit" value="save" onClick={this.onClickSave} />
      </div>
    );
  }
}

InterestsPage.propTypes = {
  interests: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  // debugger;
  return {
    interests: state.interests
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(interestActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InterestsPage);
