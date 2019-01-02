import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { capitalizeFirstLetter } from "../utils/";

const PeopleListItem = props => {
  const { people } = props;
  const { title, first, last } = people.name;
  return (
    <View style={styles.line}>
      <Image style={styles.avatar} source={{ uri: people.picture.thumbnail }} />
      <Text style={styles.lineText}>
        {capitalizeFirstLetter(title)} {capitalizeFirstLetter(first)}{" "}
        {capitalizeFirstLetter(last)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
    alignItems: "center",
    flexDirection: "row"
  },
  lineText: {
    flex: 7,
    fontSize: 20,
    paddingLeft: 15
  },
  avatar: {
    flex: 1,
    aspectRatio: 1,
    width: 200,
    marginLeft: 15,
    borderRadius: 50
  }
});

export default PeopleListItem;
