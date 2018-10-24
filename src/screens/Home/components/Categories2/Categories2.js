import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
  Animated
} from "react-native";

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const height = Dimensions.get('window').height;
export default class Categories extends Component {
  state = {
    scrollY: new Animated.Value(0),
  };

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

    return <View>
      <ScrollView onScroll={Animated.event(
        [{
          nativeEvent: {
            contentOffset: {
              y: this.state.scrollY
            }
          }
        }]
      )}
        scrollEventThrottle={16}
      >
        <View style={styles.scrollViewContent}>
          <Text>qweqwqwe</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
          <Text>asdasdasad</Text>
        </View>
      </ScrollView>
      <Animated.View style={[styles.header, { height: headerHeight }]}>
        <Animated.Image
          style={[
            styles.backgroundImage,
            { opacity: imageOpacity, transform: [{ translateY: imageTranslate }] },
          ]}
          source={require("../../../../../assets/header-back.jpg")}
        />
        <View style={styles.bar}>
          <Text style={styles.title}>Title</Text>
        </View>
      </Animated.View>
    </View>
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  fill: {
    flex: 1,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    borderWidth: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#03A9F4',
    overflow: 'hidden',
  },
  bar: {
    borderWidth: 1,
    borderColor: 'red',
    marginBottom: 28,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 18,
  },
  scrollViewContent: {
    marginTop: HEADER_MAX_HEIGHT,
  },
});