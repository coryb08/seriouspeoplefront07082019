import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, StyleSheet } from "react-native";
import * as actions from "../store/actions";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { aR } from "../config";
import { jR } from "../config";

class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const dynamicStyles = {};

    return (
      <View style={styles.container}>
        <Text style={[fonts.aR, styles.headerText]}>Splash Screen Here</Text>
        <FontAwesomeIcon icon={faSpinner} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "#c0ded9"
  },
  headerText: { fontSize: 35 }
});

const fonts = StyleSheet.create({
  aR,
  jR
});

const mapStateToProps = state => {
  return state;
};
export default connect(
  mapStateToProps,
  actions
)(Template);
