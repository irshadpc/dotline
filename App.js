/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import { View, ART } from "react-native";
import GestureAware from "./Vendor/GestureAware";
import Dot from "./dot";

const { Group, Surface, Shape, Path } = ART;

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      line: [],
      x: 0,
      y: 0
    };
  }

  render() {
    return (
      <View>
        <GestureAware onMove={this.onMove} onEnd={this.onEnd}>
          <Surface
            width="320"
            height="320"
            style={{ backgroundColor: "#7b2aad" }}
          >
            <Shape d={this.getLine()} stroke="#ad2a49" />

            <Dot x={100} y={100} />
            <Dot x={100} y={160} />
            <Dot x={100} y={220} />

            <Dot x={160} y={100} />
            <Dot x={160} y={160} />
            <Dot x={160} y={220} />

            <Dot x={220} y={100} />
            <Dot x={220} y={160} />
            <Dot x={220} y={220} />

            <Dot x={280} y={100} />
            <Dot x={280} y={160} />
            <Dot x={280} y={220} />
          </Surface>
        </GestureAware>
      </View>
    );
  }

  getLine = () => {
    console.log("getLine");
    const { line, x, y } = this.state;
    console.log(x);
    console.log(y);
    console.log(line);

    let path = new Path();

    if (line.length == 0) return path;

    line.forEach(function([x, y], index) {
      if (index == 0) {
        path.moveTo(x, y);
      } else {
        path.lineTo(x, y);
      }
    });

    path.lineTo(x, y);
    console.log("getLine END");
  };

  onMove = ev => {
    this.setState({
      x: ev.moveX,
      y: ev.moveY
    });
    console.log("onMove");
    console.log(ev.moveX);
    console.log(ev.moveY);
  };

  onEnd = () => {
    const { line } = this.state;
    console.log("onEnd");
    console.log(line.length);
    if (!line.length) {
      this.setState({
        x: 0,
        y: 0
      });
      return;
    }

    console.log("setState");
    this.setState({
      x: line[line.length - 1][0],
      y: line[line.length - 1][1]
    });
  };

  getDots = () => {
    let arr = [];

    for (let i = 0; i < 12; i++) {
      arr[i] = i;
    }
    console.log("getDots");

    console.log(arr);

    return arr.map((i, index) => {
      return <Dot key={`dot${index}`} />;
    });
  };
}
