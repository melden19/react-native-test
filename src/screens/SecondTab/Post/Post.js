import React, { Component } from 'react'
import { Text, View , Button, FlatList, StyleSheet, Image} from 'react-native'


export default class Post extends Component {
    render (){
        return (
            <View style={style.post} >
            <View style={style.post_top} >
            <View style={style.profile_img_container}>
                    <Image  style={style.profile_img}  source={require('../../../../assets/w470.jpeg')} /> 
                    <Text style={style.time} >5h</Text> 
                    </View>
                    <View  style={{flexDirection: 'column'}} >
                    <View  style={{flexDirection: 'row' , justifyContent: 'space-between'}} >
                    <Text style={style.profile_name}> {this.props.name} </Text>
                    <View style={{flexDirection: 'row' }}>
                    <Image  style={{marginTop: 10, marginLeft: 7}}  source={require('../../../../assets/oval5.png')} /> 
                      <Text style={style.profile_name}> McDonalds </Text></View>
                    
                    </View>
                      
                      <View style={style.post_text_container} >
               <Text style={style.post_text} >Very interesting thing happening right now in Anatolian Mall... Come Now! </Text>
               </View>
               {this.props.image? 
                <View   >
                <Image style={style.post_image} source={require('../../../../assets/Burano004.jpg')}/ >
                </View>
                :
                null
            
            }
              
            
              <View style={style.likes_container}> 
              <Image  source={require('../../../../assets/likeIcn.png')}/ >
              <Text style={style.like_text} >234</Text>
              <Image style={{marginLeft: 10}} source={require('../../../../assets/line15.png')}/ >
              <Text style={style.like_text}>15</Text>
              <Image style={{marginLeft: 175}} source={require('../../../../assets/stroke1.png')}/ >
              </View>
                    </View>
            
                </View>
              </View>
        )
    }
}

const style = StyleSheet.create({
      likes_container: {
        flexDirection: 'row',
        alignItems: 'center',
       paddingBottom: 10,
       paddingTop: 10
      },
      post : {
       marginTop:10,
       width: '92%',
       backgroundColor: 'white',
       borderRadius: 9,
        
        
      },
      profile_img_container: {
          flexDirection: 'column',
          
      },
      profile_img : {
        marginLeft: 10,
        marginTop: 15,
        backgroundColor: '#237ba0',
        width: 30,
        height: 30,
        borderRadius: 15
      },
      post_image: {
        width: '95%',
        height :125,
        borderRadius: 6,
        marginLeft: 10,
        
      },
      profile_name: {
        color : 'blue',
        marginTop: 12,
        marginLeft: 7,
        color: '#237ba0',
        fontSize: 13
      },
      time: {
        marginLeft: 16,
        marginTop : 3,
        color: '#cccece',
        fontSize: 10

      },
      post_top: {
        flexDirection: 'row'
      },
      post_text_container: {
        width: 280,
        
      },
      post_text: {
        fontSize :15,
        paddingTop: 10,
        paddingLeft: 10,
        paddingBottom :10
      },
      like_text: {
    color: '#237ba0',
      marginLeft: 5
      }
})

