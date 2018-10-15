import { createStackNavigator } from "react-navigation"

import App from "../App"
import OtherScreen from "../screens/OtherScreen"

export default createStackNavigator({
  App: {
    screen: App
  },
  OtherScreen: {
    screen: OtherScreen
  }
})
