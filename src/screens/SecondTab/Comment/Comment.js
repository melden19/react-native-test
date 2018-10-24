import React, { Component } from 'react'
import { Text, View , Button, FlatList, StyleSheet, Image} from 'react-native'


export default class Comment extends Component {
render(){
    return (
        <View style={style.comment} >
                    <Image  style={style.profile_img} source={require(('../../../../assets/colored_pics_12.jpg'))}  /> 
                    <View style={style.comment_text_container} >
               <Text style={style.comment_text} >Wow...! It`s beautiful..! i`m going to you </Text>
               </View>
        </View>
    )
}

}


const style = StyleSheet.create({
    comment: {
        width : '95%',
        flexDirection: 'row',
        
        
        
    },
     profile_img : {
            marginLeft: 10,
            marginTop: 10,
            
            width: 30,
            height: 30,
            borderRadius: 15
          },
          comment_text_container: {
            width: 280,
            backgroundColor: 'white',
            borderRadius: 8,
            marginLeft: 13,
            marginTop: 15
            
          },
          comment_text: {
            fontSize :13,
            paddingTop: 10,
            paddingLeft: 10,
            paddingBottom :10
          }
})