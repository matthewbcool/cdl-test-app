import React from "react"
import { View, Text, Button } from "react-native"
import { StackActions, NavigationActions } from "react-navigation"
import { RkButton } from "react-native-ui-kitten"
export default class OtherScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>This is the OtherScreen!</Text>
        <RkButton
          onPress={() => {
            this.props.navigation.dispatch(
              StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: "App" })]
              })
            )
          }}>
          Go Back
        </RkButton>
      </View>
    )
  }
}
