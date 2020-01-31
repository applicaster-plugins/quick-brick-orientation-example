import React, { useEffect } from "react";
import { View, Text, StyleSheet, DeviceEventEmitter } from "react-native";
import {
  sendQuickBrickEvent,
  NativeEventEmitter,
} from "@applicaster/zapp-react-native-bridge/QuickBrick";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    width: "100%",
    height: "100%",
  },
  text: {
    color: "white",
    fontSize: 25,
  },
});
const App = () => {
  sendQuickBrickEvent("allowedOrientationsForScreen", {
    orientation: 1,
  });
  useEffect(() => {
    DeviceEventEmitter.addListener("orientationChange", res =>
      console.log("Callback:", res)
    );
    return DeviceEventEmitter.removeListener("orientationChange");
  }, []);
  console.log("it works!");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
    </View>
  );
};
export default App;
