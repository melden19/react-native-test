import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView
} from "react-native";

export default class OtherLine extends Component {
  render() {
    return <View style={styles.categories}>
        <View style={styles.categoriesContent}>
          <View style={styles.headerLineTop}>
            <Text style={styles.Text}>Active now in in your city</Text>
          </View>
          <ScrollView  horizontal={true}>
          <View style={styles.headerLineBottom}>
          
            <View style={styles.listItem}>
            <ImageBackground
              source={require('../../../../../assets/fest.jpg')}
              style={{
                display: "flex",
                alignItems: 'flex-start',
                justifyContent: "center",
                width: "100%", height: "100%"
              }}
              imageStyle={{ borderRadius: 10 }}
            >
          
              <Text style={styles.DubaiText}>Aljanadriyah Festival</Text>
              <Text style={styles.DubaiText}>3 Tickets Remaining</Text>
            </ImageBackground>
            </View>
            <View style={styles.listItem}>
            <ImageBackground
              source={require('../../../../../assets/fest.jpg')}
              style={{
                display: "flex",
               alignItems: 'flex-start',
                justifyContent: "center",
                width: "100%", height: "100%"
              }}
              imageStyle={{ borderRadius: 10 }}
            >
              <Text style={styles.DubaiText}>Riyadh Party</Text>
              <Text style={styles.DubaiText}>3 Tickets Remaining</Text>
            </ImageBackground>
            </View>
             <View style={styles.listItem}>
            <ImageBackground
              source={require('../../../../../assets/fest.jpg')}
              style={{
                display: "flex",
                alignItems: 'flex-start',
                justifyContent: "center",
                width: "100%", height: "100%"
              }}
              imageStyle={{ borderRadius: 10 }}
            >
              <Text style={styles.DubaiText}>Aljanadriyah Festival</Text>
              <Text style={styles.DubaiText}>3 Tickets Remaining</Text>
            </ImageBackground>
            </View>
          </View>
          </ScrollView>
        </View>
      </View>;
  }
}

const styles = StyleSheet.create({
  categories: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 220,
    backgroundColor: "#F3F3F4"
    // borderColor: "green",
    // borderWidth: 2
  },
  categoriesContent: {
    width: "90%",
    marginTop: 40,
    marginBottom: 30
    // borderColor: "red",
    // borderWidth: 2
  },
  headerLineTop: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingLeft: 5,
    paddingRight: 5
    // borderColor: "green",
    // borderWidth: 2
  },
  headerLineBottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    height: "120%",
    padding: 2.5,
    paddingTop: 10,
    // borderColor: "green",
    // borderWidth: 2
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: "46%",
    height: "80%",
    marginRight: 10,
    borderColor: "pink",
    // borderWidth: 1.5,
    // borderRadius: 10
  },
  changeCityButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 27,
    borderRadius: 7,
    backgroundColor: "#237BA0"
  },
  changeCityText: {
    fontSize: 13,
    color: "white"
  },
  DubaiText: {
    fontSize: 13,
    color: "white",
    marginLeft: 10,
  },
  Text: {
    fontSize: 16,
    color: "#8E9095",
  }
});
