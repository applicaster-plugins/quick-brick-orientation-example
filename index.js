import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  DeviceEventEmitter,
  Dimensions,
} from "react-native";
import {
  sendQuickBrickEvent,
  NativeEventEmitter,
} from "@applicaster/zapp-react-native-bridge/QuickBrick";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  text: {
    color: "white",
    fontSize: 25,
  },
});

const colorMap = {
  "1": "black",
  "2": "red",
  "4": "green",
  "6": "yellow",
  "8": "blue",
};
const App = () => {
  const [orientation, setOrientation] = useState(1);

  useEffect(() => {
    sendQuickBrickEvent("allowedOrientationsForScreen", {
      orientation: 1,
    });
    DeviceEventEmitter.addListener("orientationChange", res => {
      console.log("Callback:", res);
      setOrientation(res.orientation);
    });

    return () => {
      sendQuickBrickEvent("releaseOrientationsForScreen");
      DeviceEventEmitter.removeListener("orientationChange");
    };
  }, []);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colorMap[String(orientation)] || "black" },
      ]}
    >
      <Text style={styles.text}>Hello World!</Text>
    </View>
  );
};
export default App;
