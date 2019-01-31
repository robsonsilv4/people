import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default class PeopleDetailPage extends React.Component {
  render() {
    // const { people } = this.props.navigation.state.params;

    const people = {
      gender: "female",
      name: {
        title: "miss",
        first: "lucila",
        last: "caldeira"
      },
      location: {
        street: "9881 rua alagoas ",
        city: "caucaia",
        state: "mato grosso do sul",
        postcode: 41219,
        coordinates: {
          latitude: "-79.9023",
          longitude: "32.0500"
        },
        timezone: {
          offset: "-6:00",
          description: "Central Time (US & Canada), Mexico City"
        }
      },
      email: "lucila.caldeira@example.com",
      login: {
        uuid: "9133f136-50c3-487b-b78a-ea32dfe80d1f",
        username: "redwolf711",
        password: "kermit",
        salt: "cXpHDS7D",
        md5: "eec9b49ab239a1ca9b88d3cce204011e",
        sha1: "7ea1a1def93c18e84749258e4ec610c6ac017961",
        sha256:
          "39c816a6e0e702f732b5528a7a5191c7b0f624ce755ed57e698fdcd84fad9881"
      },
      dob: {
        date: "1955-04-25T22:19:21Z",
        age: 63
      },
      registered: {
        date: "2004-05-30T22:55:42Z",
        age: 14
      },
      phone: "(99) 5080-9804",
      cell: "(31) 8294-6254",
      id: {
        name: "",
        value: null
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/84.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/84.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/84.jpg"
      },
      nat: "BR"
    };

    return (
      <View style={styles.container}>
        <Image source={{ uri: people.picture.large }} style={styles.avatar} />
        <Text>Detalhes</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  avatar: {
    aspectRatio: 1
  }
});
