import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground
} from "react-native";

export default class Header extends Component {
  render() {
    return (
        <View style={styles.headerBlock}>
          <ImageBackground
            source={require("../../../../../assets/header-back.jpg")}
          style={{
            display: "flex",
            alignItems: 'center',
            justifyContent: "center",
             width: "100%", height: "100%" }}
          >
            <View style={styles.headerContent}>
              <View style={styles.headerLineTop}>
                <TouchableOpacity
                  style={styles.changeCityButton}
                  title="change city"
                  color="transparent"
                  onPress={undefined}
                >
                  <Text style={styles.changeCityText}>Change City</Text>
                </TouchableOpacity>
                <View style={styles.imageContainer}>
                  <Image
                    style={{ width: 30, height: 30 }}
                    source={require("../../../../../assets/mapIcnWhite.png")}
                  />
                  <Image
                    style={{ width: 30, height: 30 }}
                    source={require("../../../../../assets/searchIcnWhite.png")}
                  />
                </View>
              </View>
              <View style={styles.headerLineBottom}>
                <Text style={styles.DubaiText}>Dubai</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  headerBlock: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 170
    // borderColor: "red",
    // borderWidth: 2
  },
  headerContent: {
    width: "90%",
    height: 140,
    // borderColor: "red",
    // borderWidth: 2
  },
  headerLineTop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 50,
    marginTop: 35
    // borderColor: "green",
    // borderWidth: 2
  },
  headerLineBottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 50,
    marginTop: 2
    // borderColor: "green",
    // borderWidth: 2
  },
  DubaiText: {
    fontSize: 35,
    color: "white"
  },
  changeCityButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 90,
    height: 27,
    borderRadius: 45,
    borderColor: "white",
    borderWidth: 2
  },
  changeCityText: {
    fontSize: 13,
    color: "white"
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 80,
    height: 30
  }
});
