import firebase from "../../api/firebase";
import config from "../../config.js";
import * as actions from "./index";
require("firebase/firestore");

export const currentUser = () => {
  return async (dispatch, getState) => {
    try {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          dispatch({
            type: "SET_AUTH",
            payload: user
          });

          console.log("user is logged in");
          return dispatch(actions.retrieveRealtime(user.uid));
        } else {
          dispatch({
            type: "APP_LOADING",
            payload: false
          });
          console.log("user is not logged in");
          return dispatch(actions.appLoading(false));
        }
      });
    } catch (err) {
      console.log("current user", err);
    }
  };
};
