import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView, Dimensions, ImageBackground, TouchableOpacity, Image, Animated } from "react-native";
import Header from './components/Header/Header';
import Categories from "./components/Categories/Categories";
import OtherLine from "./components/OtherLine/OtherLine";
import Bottom from '~/screens/SecondTab'

const height = Dimensions.get('window').height;

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
export default class Home extends Component {
  state = {
    scrollY: new Animated.Value(0),
  }
  render() {

    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    });
    const imageOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    const imageTranslate = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -50],
      extrapolate: 'clamp',
    });
    return (
      <View>
        <Animated.View style={[styles.headerBlock, { height: headerHeight }]}>
          <ImageBackground
            source={require("../../../assets/header-back.jpg")}
            style={{
              display: "flex",
              alignItems: 'center',
              justifyContent: "center",
              width: "100%", height: "100%"
            }}
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
                    source={require("../../../assets/mapIcnWhite.png")}
                  />
                  <Image
                    style={{ width: 30, height: 30 }}
                    source={require("../../../assets/searchIcnWhite.png")}
                  />
                </View>
              </View>
              <View style={styles.headerLineBottom}>
                <Text style={styles.DubaiText}>Dubai</Text>
              </View>
            </View>
          </ImageBackground>
        </Animated.View>
        <ScrollView
          onScroll={Animated.event(
            [{
              nativeEvent: {
                contentOffset: {
                  y: this.state.scrollY
                }
              }
            }]
          )}
          scrollEventThrottle={16}
          style={{ height: height - 90 }}
        >
          <Categories />
          <OtherLine />
          <Bottom />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerBlock: {
    // position: 'absolute',
    // zIndex: 10,
    // top: 0,
    // left: 0,
    // right: 0
  },
  headerContent: {
    width: "90%",
    // height: 140,
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
