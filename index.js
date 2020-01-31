import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { sendQuickBrickEvent } from "@applicaster/zapp-react-native-bridge/QuickBrick";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    width: "100%",
    height: "100%"
  },
  text: {
    color: "white",
    fontSize: 25
  }
});
const App = () => {
  sendQuickBrickEvent("allowedOrientationsForScreen", {
    orientation: 1
  });
  console.log("it works!");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
    </View>
  );
};
export default App;
