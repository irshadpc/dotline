/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

import GesturePassword from "./src/index.js";

var Password1 = "";

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Please input your password.",
      status: "normal"
    };
  }

  onEnd(password) {
    if (Password1 === "") {
      // The first password
      Password1 = password;
      this.setState({
        status: "normal",
        message: "Please input your password secondly."
      });
    } else {
      // The second password
      if (password === Password1) {
        this.setState({
          status: "right",
          message: "Your password is set to " + password
        });

        Password1 = "";
        // your codes to close this view
      } else {
        this.setState({
          status: "wrong",
          message: "Not the same, try again."
        });
      }
    }
  }

  onStart() {
    if (Password1 === "") {
      this.setState({
        message: "Please input your password."
      });
    } else {
      this.setState({
        message: "Please input your password secondly."
      });
    }
  }

  render() {
    return (
      <GesturePassword
        ref="pg"
        status={this.state.status}
        message={this.state.message}
        onStart={() => this.onStart()}
        onEnd={password => this.onEnd()}
        innerCircle={true}
        outerCircle={true}
      />
    );
  }
}
