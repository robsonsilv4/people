import { createStackNavigator, createAppContainer } from "react-navigation";
import PeoplePage from "./src/pages/PeoplePage";

const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: PeoplePage
    }
  },
  {
    defaultNavigationOptions: {
      title: "Pessoas!",
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
