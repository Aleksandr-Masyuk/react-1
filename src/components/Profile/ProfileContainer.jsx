import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import {getStatus, updateStatus} from "../../redux/profile-reducer"

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId)
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />;
  }
}

let mapsStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
});

export default compose(
  connect(mapsStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
)(ProfileContainer)


