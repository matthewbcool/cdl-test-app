/** @format */

import { AppRegistry } from "react-native"
import { name as appName } from "./app.json"
import creatStackNavigator from "./config/routes"

AppRegistry.registerComponent(appName, () => creatStackNavigator)
