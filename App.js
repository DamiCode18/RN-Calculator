import { useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Switch } from 'react-native';
import constants from 'expo-constants';
import Calculator from './screens/Calculator';
import {ThemeContext} from './src/context/ThemeContext';



export default function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
    <View style={theme === "light" ? styles.container : [styles.container, {backgroundColor: "#000"}]}>
      <Switch 
      value={theme !== "light"}
      onValueChange={()=> setTheme(theme=="light" ? "dark" : "light")}
      />
      <Calculator />
      <StatusBar style="auto" />
    </View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: constants.statusBarHeight,
    alignItems: 'center',
    paddingTop: 10
  },
  text: {
    color: '#fff',
  }
});
