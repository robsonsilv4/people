import { createStackNavigator, createAppContainer } from "react-navigation";
import PeoplePage from "./src/pages/PeoplePage";

const AppNavigator = createStackNavigator({
  Main: {
    screen: PeoplePage
  }
});

export default createAppContainer(AppNavigator);
