import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class RootScene extends Component {
  goToHome = () => Actions['home']();
  goToModal1 = () => Actions['modal1']();
  goToModal2 = () => Actions['modal2']();

  render() {
    return <View>
        <Text > RootScene </Text>
        <Button title={"go to home"} onPress={this.goToHome} />
        <Button title={"go to modal1"} onPress={this.goToModal1} />
        <Button title={"go to modal2"} onPress={this.goToModal2} />
      </View>;
  } 
}
