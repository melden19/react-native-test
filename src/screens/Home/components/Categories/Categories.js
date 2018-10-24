import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground
} from "react-native";

export default class Categories extends Component {
  render() {
    return <View style={styles.categories}>
        <View style={styles.categoriesContent}>
          <View style={styles.headerLineTop}>
            <Text style={styles.DubaiText}>What is in Dubai</Text>
            <TouchableOpacity style={styles.changeCityButton} title="change city" color="transparent" onPress={undefined}>
              <Text style={styles.changeCityText}>Hotels</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.headerLineBottom}>
            <View style={styles.listItem}>
            <ImageBackground
              source={require('../../../../../assets/header-back.jpg')}
              style={{
                display: "flex",
                alignItems: 'center',
                justifyContent: "center",
                width: "100%", height: "100%",
                borderRadius: 10
              }}
              imageStyle={{ borderRadius: 10 }}
            >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require('../../../../../assets/tourIcn.png')}
                />
                <Text style={styles.cardText}>Entertainment</Text>
              
            </ImageBackground>
            </View>
            <View style={styles.listItem}>
            <ImageBackground
              source={require('../../../../../assets/header-back.jpg')}
              style={{
                display: "flex",
                alignItems: 'center',
                justifyContent: "center",
                width: "100%", height: "100%",
                borderRadius: 10
              }}
              imageStyle={{ borderRadius: 10 }}
            >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require('../../../../../assets/eventIcn.png')}
                />
                <Text style={styles.cardText}>Events</Text>
              
            </ImageBackground>
            </View>
            <View style={styles.listItem}>
            <ImageBackground
              source={require('../../../../../assets/header-back.jpg')}
              style={{
                display: "flex",
                alignItems: 'center',
                justifyContent: "center",
                width: "100%", height: "100%",
                borderRadius: 10
              }}
              imageStyle={{ borderRadius: 10 }}
            >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require('../../../../../assets/restIcn.png')}
                />
                <Text style={styles.cardText}>Restaurants</Text>
              
            </ImageBackground>
            </View>
            <View style={styles.listItem}>
            <ImageBackground
              source={require('../../../../../assets/header-back.jpg')}
              style={{
                display: "flex",
                alignItems: 'center',
                justifyContent: "center",
                width: "100%", height: "100%",
                borderRadius: 10
              }}
              imageStyle={{ borderRadius: 10 }}
            >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require('../../../../../assets/burger-icon-white.png')}
                />
                <Text style={styles.cardText}>Breakfast</Text>
              
            </ImageBackground>
            </View>
            <View style={styles.listItem}>
            <ImageBackground
              source={require('../../../../../assets/header-back.jpg')}
              style={{
                display: "flex",
                alignItems: 'center',
                justifyContent: "center",
                width: "100%", height: "100%",
                borderRadius: 10
              }}
              imageStyle={{ borderRadius: 10 }}
            >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require('../../../../../assets/burger-icon-white.png')}
                />
                <Text style={styles.cardText}>Masajid</Text>
              
            </ImageBackground>
            </View>
            <View style={styles.listItem}>
            <ImageBackground
              source={require('../../../../../assets/header-back.jpg')}
              style={{
                display: "flex",
                alignItems: 'center',
                justifyContent: "center",
                width: "100%", height: "100%",
                borderRadius: 10
              }}
              imageStyle={{ borderRadius: 10 }}
            >
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require('../../../../../assets/coffeeIcn.png')}
                />
                <Text style={styles.cardText}>Coffee Cup</Text>
              
            </ImageBackground>
            </View>
          </View>
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
    backgroundColor: "#FBFBFB"
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
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    height: "120%",
    padding: 2.5,
    paddingTop: 10
    // borderColor: "green",
    // borderWidth: 2
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: "32%",
    height: "30%",
    marginBottom: 5,
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
    fontSize: 16,
    color: "#9A9DA1"
  },
  cardText: {
    marginTop: 3,
    fontSize: 10,
    color: "white"
  }
});
