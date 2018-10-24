import React, { Component } from 'react'
import { Text, View , Button, ScrollView, StyleSheet, Image} from 'react-native'
import Post from './Post'
import Comment from './Comment'

const image = '../../../../assets/Burano004.jpg'

const names = ['Omar Hayad', 'Osama Alnajar']
export default class SecondTab extends Component {
  
  render() {
    return (
      // <View> 
      //   <View style={style.top}>
      //     <Text  color="#841584" > Dubai </Text>
      //     <Button onPress={a =>a}    title="Change City" ></Button>

          
      //     <Image source={require('../../../assets/mapIcnWhite.png')}/ >
      //     <Image source={require('../../../assets/searchIcnWhite.png')}/ >
        
         
      //     </View>
         <ScrollView>
           <View style={style.postList}>
           <Text style={{paddingTop: 15, paddingLeft: 15  , fontSize: 16, color: '#888b90', marginRight: 200}}>People in your City</Text>
          <Post name={names[0]} />
          <Post image={image} name={names[1]} />
          <Comment/>
          <Post name={names[0]}/>
          </View>
        
         </ScrollView>
          
         
     
    //  </View>
    )
  }
}

const style = StyleSheet.create({
  postList: {
    width: '100%' ,
    flexDirection: 'column', 
    alignItems: 'center', 
    backgroundColor: '#fafafa'
  },
    all: {
      flex:1 ,
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    top : {
     flexDirection: 'row',
     justifyContent: 'space-around',
     alignItems: 'center'
    },
  

})
