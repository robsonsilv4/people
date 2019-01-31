import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Line = ({ label, content }) => {
  return (
    <View style={styles.line}>
      <Text style={[styles.cellLabel, styles.label]}>{label}</Text>
      <Text style={styles.cellContent}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    flexDirection: "row",
    paddingTop: 3,
    paddingBottom: 3,
    borderWidth: 1,
    borderColor: "#c5c5c5"
  },
  label: {
    fontWeight: "bold"
  },
  cell: {
    fontSize: 18,
    paddingLeft: 5
  }
});

export default Line;
