import React, { Component } from "react";
import { connect } from "react-redux";
import { Actions, Router, Scene, Reducer, ActionConst, Stack, Modal, Lightbox } from "react-native-router-flux";
// import * as actions from "./src/store/actions";
// import { StackViewStyleInterpolator } from 'react-navigation-stack';
import LoadingOverlay from "./src/components/loadingOverlay";
import LoginSignup from "./src/components/auth/loginSignup";
import ProfileSetup from "./src/components/profile/profileSetup";
import * as actions from "./src/store/actions";

const reset = { type: "reset" };

class AppRouter extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    this.state = { loading: this.props.events.loading };
  }

  componentDidMount = () => {
    this.props.currentUser();
  };

  render() {
    // const transitionConfig = () => ({
    // 	screenInterpolator: StackViewStyleInterpolator.forFadeFromBottomAndroid,
    //   });
    if (this.props.events.appLoading) {
      return <LoadingOverlay update={() => this.update(bool)} />;
    } else {
      return (
        <Router>
          <Modal key="modal" hideNavBar>
            <Lightbox key="lightbox">
              <Stack key="root" titleStyle={{ alignSelf: "center" }} hideNavBar>
                <Scene hideNavBar={true}>
                  {/* <Scene key="splashScreen" component={LoadingOverlay} /> */}
                  <Scene key="LoginSignup" component={LoginSignup} initial={this.props.auth.status === 0 ? true : false} />
                  <Scene key="ProfileSetup" component={ProfileSetup} initial={this.props.auth.status > 0 ? true : false} />
                </Scene>
              </Stack>
            </Lightbox>
          </Modal>
        </Router>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    isConnectedStore: state.events.isConnected,
    ...state
  };
};

const ConnectedRouter = connect(
  mapStateToProps,
  actions
)(AppRouter);

export default {
  ConnectedRouter
};
