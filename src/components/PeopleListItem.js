import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import { capitalizeFirstLetter } from "../utils/";

const PeopleListItem = props => {
  const { people, navigationToPeopleDetail } = props;
  const { title, first, last } = people.name;
  return (
    <TouchableOpacity
      onPress={() => {
        navigationToPeopleDetail();
      }}
    >
      <View style={styles.line}>
        <Image
          style={styles.avatar}
          source={{ uri: people.picture.thumbnail }}
        />
        <Text style={styles.lineText}>
          {capitalizeFirstLetter(title)} {capitalizeFirstLetter(first)}{" "}
          {capitalizeFirstLetter(last)}
        </Text>
      </View>
    </TouchableOpacity>
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
    marginLeft: 15,
    borderRadius: 50
  }
});

export default PeopleListItem;
