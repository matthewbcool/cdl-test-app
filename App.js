/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import {
  RkButton,
  RkTheme,
  RkChoiceGroup,
  RkChoice
} from "react-native-ui-kitten"
import DateTimePicker from "react-native-modal-datetime-picker"
import { StackActions, NavigationActions } from "react-navigation"

RkTheme.setType("RkButton", "calculate", {
  fontSize: 24,
  width: 180,
  borderRadius: 10,
  marginBottom: 20,
  marginTop: 20
})

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDateTimePickerVisible: false
    }
  }
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })

  _handleDatePicked = time => {
    console.log("A time has been picked: ", time)
    this._hideDateTimePicker()
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.dummyHeader} />
        <View style={styles.baselineContainer}>
          <TouchableOpacity onPress={this._showDateTimePicker}>
            <View style={styles.startLandContainer}>
              <Text style={styles.formText}>Break Start Time:</Text>
              <Text style={styles.pickerPlaceHolder}> 00:00</Text>
            </View>
          </TouchableOpacity>
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDateTimePicker}
            mode="time"
            datePickerModeAndroid="spinner"
            is24Hour={true}
            titleIOS="Pick a Time"
          />

          <TouchableOpacity onPress={this._showDateTimePicker}>
            <View style={styles.startLandContainer}>
              <Text style={styles.formText}>Landing Time: </Text>
              <Text style={styles.pickerPlaceHolder}> 00:00</Text>
            </View>
          </TouchableOpacity>
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDateTimePicker}
            mode="time"
            is24Hour={true}
            datePickerModeAndroid="spinner"
            titleIOS="Pick a Time"
          />

          <View style={styles.lastServiceSelectContainer}>
            <Text style={styles.formText}>Time for Last Service: </Text>
            <RkChoiceGroup
              selectedIndex={1}
              style={{
                flexDirection: "row",
                alignSelf: "center"
              }}>
              <TouchableOpacity choiceTrigger>
                <View style={styles.choiceBox}>
                  <RkChoice rkType="default" />
                  <Text>60</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity choiceTrigger>
                <View style={styles.choiceBox}>
                  <RkChoice rkType="default" />
                  <Text>75</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity choiceTrigger>
                <View style={styles.choiceBox}>
                  <RkChoice rkType="default" />
                  <Text>90</Text>
                </View>
              </TouchableOpacity>
            </RkChoiceGroup>
          </View>

          <View style={styles.breakIntervalContainer}>
            <Text style={styles.formText}>Interval Between Breaks: </Text>
            <RkChoiceGroup
              selectedIndex={1}
              style={{
                flexDirection: "row",
                alignSelf: "center"
              }}>
              <TouchableOpacity style={styles.choiceBox} choiceTrigger>
                <View>
                  <RkChoice rkType="default" />
                  <Text>0</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choiceBox} choiceTrigger>
                <View>
                  <RkChoice rkType="default" />
                  <Text>5</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.choiceBox} choiceTrigger>
                <View>
                  <RkChoice rkType="default" />
                  <Text>10</Text>
                </View>
              </TouchableOpacity>
            </RkChoiceGroup>
          </View>
        </View>
        <RkButton rkType="calculate">Calculate</RkButton>
        <RkButton
          onPress={() => {
            this.props.navigation.dispatch(
              StackActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: "OtherScreen" })
                ]
              })
            )
          }}>
          Test Navigation
        </RkButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    marginTop: 10
  },
  lastServiceSelectContainer: {
    borderColor: "red",
    borderWidth: 2,
    flexDirection: "column",
    marginTop: 20
  },
  breakIntervalContainer: {
    borderColor: "blue",
    borderWidth: 2,
    flexDirection: "column",
    marginTop: 20
  },
  startLandContainer: {
    borderColor: "red",
    borderWidth: 2,
    flexDirection: "row",
    marginTop: 20
  },
  baselineContainer: {
    alignItems: "baseline"
  },
  dummyHeader: {
    height: 80,
    width: 400,
    borderBottomColor: "black",
    borderBottomWidth: 5
  },
  choiceBox: {
    flexDirection: "column",
    alignItems: "center",
    fontSize: 24,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 10
  },
  formText: {
    fontSize: 22
  },
  pickerPlaceHolder: {
    fontSize: 22,
    backgroundColor: "red"
  }
})
