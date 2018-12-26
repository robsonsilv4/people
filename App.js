import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./src/Components/Header";

export default class App extends React.Component {
  renderList() {
    const names = [
      "Robson Silva",
      "Gildard Mhn",
      "Gabriel Lins",
      "Max Wendel",
      "Emerson Vieira"
    ];

    textElements = names.map(name => {
      return <Text key={name}>{name}</Text>;
    });

    return textElements;
  }

  render() {
    return (
      <View>
        <Header title="Pessoas!" />
        {this.renderList()}
      </View>
    );
  }
}
