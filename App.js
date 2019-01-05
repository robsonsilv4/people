import { createStackNavigator, createAppContainer } from "react-navigation";
import PeoplePage from "./src/pages/PeoplePage";
import PeopleDetailPage from "./src/pages/PeopleDetailPage";

import capitalizeFirstLetter from "./src/utils";

const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: PeoplePage
    },
    PeopleDetail: {
      screen: PeopleDetailPage,
      navigationOptions: ({ navigation }) => {
        const peopleName = capitalizeFirstLetter(
          navigation.state.params().pessoa.name.first
        );
        // const peopleName = capitalizeFirstLetter(
        //   navigation.state.params.people.name.first
        // );

        return {
          title: peopleName,
          headerTitleStyle: {
            color: "white",
            fontSize: 30
          }
        };
      }
    }
  },
  {
    defaultNavigationOptions: {
      title: "Pessoas!",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#6ca2f7",
        borderBottomWidth: 1,
        borderBottomColor: "#c5c5c5"
      },
      headerTitleStyle: {
        color: "white",
        fontSize: 30,
        textAlign: "center",
        flexGrow: 1
      }
    }
  }
);

export default createAppContainer(AppNavigator);
