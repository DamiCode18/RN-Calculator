import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Button from "../src/components/button";

const _press = () => {
  alert("no dey press me too much");
};
export default function Calculator() {
  return (
      <View style={styles.viewBottom}>
        <View style={styles.viewResult}>
        </View>
        <View style={[styles.buttons]}>
          <View style={{ flexDirection: "row" }}>
            <Button title="AC" onPress={() => _press} />
            <Button title="+/-" onPress={() => _press} />
            <Button title="%" onPress={() => _press} />
            <Button title="÷" onPress={() => _press} />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Button title="7" onPress={() => _press} />
            <Button title="8" onPress={() => _press} />
            <Button title="9" onPress={() => _press} />
            <Button title="x" onPress={() => _press} />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Button title="4" onPress={() => _press} />
            <Button title="5" onPress={() => _press} />
            <Button title="6" onPress={() => _press} />
            <Button title="-" onPress={() => _press} />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Button title="1" onPress={() => _press} />
            <Button title="2" onPress={() => _press} />
            <Button title="3" onPress={() => _press} />
            <Button title="+" onPress={() => _press} />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Button style={styles.zero} title="0" onPress={() => _press} />
            <Button title="." onPress={() => _press} />
            <Button title="=" onPress={() => _press} />
          </View>
          {/* <View style={{flexDirection: 'row'}}>
        <View style={styles.buttonContainer}><Button title="4" /></View>
        <View style={styles.buttonContainer}><Button title="4" /></View>
        <View style={styles.buttonContainer}><Button title="4" /></View>
        </View>
        <View style={{flexDirection: 'row'}}>
        <View style={styles.buttonContainer}><Button title="4" /></View>
        <View style={styles.buttonContainer}><Button title="4" /></View>
        <View style={styles.buttonContainer}><Button title="4" /></View>
        </View>
        <View style={{flexDirection: 'row'}}>
        <View style={styles.buttonContainer}><Button title="4" /></View>
        <View style={styles.buttonContainer}><Button title="4" /></View>
        <View style={styles.buttonContainer}><Button title="4" /></View>
        </View> */}
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  text: {
    color: "#fff",
    textAlign: "center",
    margin: "auto",
    fontSize: 30,
    padding: 10,
  },
  buttons: {
    marginTop: 100,
    display: "flex",
    flexDirection: "column",
  },
  buttonContainer: {
    color: "#fff",
  },
  button: {
    color: "#fff",
  },
  touchableOpacity: {
    color: "#fff",
    backgroundColor: "transparent",
  },
  viewBottom: {
    position: "absolute",
    bottom: 50,
  },
  zero: {
    width: 80,
    height: 40,
    padding:40
  },
  viewResult: {
    border: "1px solid gray",
    width: 80,
    height: 40
  }
});
