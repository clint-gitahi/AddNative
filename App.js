// https://hackernoon.com/how-to-develop-android-ui-component-for-react-native-43b121272eb8
// https://gist.github.com/chourobin/f83f3b3a6fd2053fad29fff69524f91c
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import VideoView from "./CreateVideoView";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <VideoView
          style={{ flex: 1, width: "100%", height: "100%" }}
          url="https://www.radiantmediaplayer.com/media/bbb-360p.mp4"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
