import React, { useState, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import Button from "../src/components/button";
import { ThemeContext } from "../src/context/ThemeContext";

export default function Calculator() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(0);
  const check = useContext(ThemeContext);


  const onPressOperation = (val) => {
    setOperation(val);
    setSecondNumber(firstNumber);
    setFirstNumber("");
  };
  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult(0);
  };
  const handleNumberPress = (val) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + val);
    }
  };
  const getSciResults = (val) => {
    switch (val) {
      case "sin":
        clear();
        setResult(Math.sin(parseInt(firstNumber)).toFixed(3));
        break;
      case "cos":
        clear();
        setResult(Math.cos(parseInt(firstNumber)).toFixed(3));
        break;
      case "tan":
        clear();
        setResult(Math.tan(parseInt(firstNumber)).toFixed(3));
        break;
      case "√":
        clear();
        setResult(Math.sqrt(parseInt(firstNumber)).toFixed(3));
        break;
        default:
        clear();
        setResult(0);
        break;
    }
  };

  const getResult = () => {
    switch (operation) {
      case "+":
        clear();
        setResult(parseInt(secondNumber) + parseInt(firstNumber));
        break;
      case "-":
        clear();
        setResult(parseInt(secondNumber) - parseInt(firstNumber));
        break;
      case "/":
        clear();
        setResult(parseInt(secondNumber) / parseInt(firstNumber));
        break;
      case "x":
        clear();
        setResult(parseInt(secondNumber) * parseInt(firstNumber));
        break;
      default:
        clear();
        setResult(0);
        break;
    }
  };

  return (
    <View style={styles.viewBottom}>
      <View>
        <Text style={check === "light" ? styles.viewResult : [styles.viewResult, {borderColor: "#fff", color: "#fff"}]}>
          {firstNumber || secondNumber || result}
        </Text>
      </View>
      <View style={[styles.buttons]}>
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <Button title="sin" onPress={() => getSciResults("sin")} />
          <Button title="cos" onPress={() => getSciResults("cos")} />
          <Button title="tan" onPress={() => getSciResults("tan")} />
          <Button
            title="⌫"
            onPress={() => setFirstNumber(firstNumber.slice(0, -1))}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Button title="AC" onPress={clear} />
          <Button title="+/-" onPress={() => onPressOperation("+/-")} />
          <Button title="%" onPress={() => onPressOperation("%")} />
          <Button
            title="÷"
            onPress={() => onPressOperation("/")}
            color="#fff"
            bg="#E67811"
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Button title="7" onPress={() => handleNumberPress("7")} />
          <Button title="8" onPress={() => handleNumberPress("8")} />
          <Button title="9" onPress={() => handleNumberPress("9")} />
          <Button
            title="x"
            onPress={() => onPressOperation("x")}
            color="#fff"
            bg="#E67811"
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Button title="4" onPress={() => handleNumberPress("4")} />
          <Button title="5" onPress={() => handleNumberPress("5")} />
          <Button title="6" onPress={() => handleNumberPress("6")} />
          <Button
            title="-"
            onPress={() => onPressOperation("-")}
            color="#fff"
            bg="#E67811"
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Button title="1" onPress={() => handleNumberPress("1")} />
          <Button title="2" onPress={() => handleNumberPress("2")} />
          <Button title="3" onPress={() => handleNumberPress("3")} />
          <Button
            title="+"
            onPress={() => onPressOperation("+")}
            color="#fff"
            bg="#E67811"
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Button title="0" onPress={() => handleNumberPress("0")} />
          <Button title="." onPress={() => handleNumberPress(".")} />
          <Button title="√" onPress={() => getSciResults("√")} />
          <Button
            title="="
            onPress={() => getResult()}
            color="#fff"
            bg="#E67811"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  touchableOpacity: {
    color: "#fff",
    backgroundColor: "transparent",
  },
  viewBottom: {
    position: "absolute",
    bottom: 50,
  },
  viewResult: {
    borderColor: "#000000",
    borderWidth: 2,
    borderStyle: "solid",
    padding: 20,
    fontSize: 70,
    marginBottom: 15,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'flex-end'
  },
});
