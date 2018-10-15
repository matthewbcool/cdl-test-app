import React from "react"
import { View, Text, Button } from "react-native"
import { StackActions, NavigationActions } from "react-navigation"

export default class OtherScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>This is the OtherScreen!</Text>
        <Button
          title="Go Back"
          onPress={() => {
            this.props.navigation.dispatch(
              StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: "App" })]
              })
            )
          }}>
          Go Back
        </Button>
      </View>
    )
  }
}
