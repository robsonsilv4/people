import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./src/Components/Header";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <Text>Funcionando!</Text>
      </View>
    );
  }
}
