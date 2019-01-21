
// Settings.js
{/* <Image  source={require('/images/splash/splash.png')}
style={styles.backgroundImage}
> */}
import React, { Component } from 'react';
import { View, Text,Image,StyleSheet,ImageBackground } from 'react-native';
import { Container, Header, Content, Item, Input,Title,Button} from 'native-base';
import {navigationOptions} from 'react-navigation';
export class LoginScreen extends Component {
  static navigationOptions = {
    header: null,

  };
  render() {
    return (
      <View>
        <ImageBackground
          style = {styles.backgroundImage}
          source={require('../images/splash/splash.png')}
        >
         <Content style={styles.container}>
              <Title style={styles.titleStyle}>Login</Title>
              <Item regular style={{marginTop:20}}>
                  <Input placeholder='Username'/>
              </Item>
              <Item regular style={{marginTop:10}}>
                  <Input placeholder='Password' secureTextEntry={true}/>
              </Item>
              <Button full style={{marginTop:30,backgroundColor:'#f37737',height:60,paddingTop:20}} onPress={() => this.props.navigation.navigate('Dashboard')}>
                  <Text style={{color:'white',fontSize:20,fontWeight:'bold',textAlign:'center',width:'100%',height:'100%'}}>LOGIN NOW</Text>
              </Button>
              <View style={{paddingTop:30}}>
              <Title style={styles.titleStyle}>OR</Title>
              </View>
              <Button full style={{marginTop:10,height:70,backgroundColor:'transparent'}} >
                  <Image style={{width:'100%',height:'100%'}} source={require('../images/login/facebook.png')}/>
              </Button>
              <Button full style={{marginTop:10,backgroundColor:'transparent',height:70}}>
                <Image style={{width:'100%',height:'100%'}} source={require('../images/login/microsoft.png')}/>
              </Button>
              <Button full style={{marginTop:10,backgroundColor:'transparent',height:70}}>
                <Image style={{width:'100%',height:'100%'}} source={require('../images/login/google.png')}/>
              </Button>

          </Content>
       </ImageBackground>
      </View>
    )
  }
};

export default LoginScreen;

const styles = StyleSheet.create({
  titleStyle:{
    fontSize:32,
    color:'white',
  },
  container:{
    paddingTop:50,
    margin:10,
    paddingBottom:20


  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    position: 'relative',
    top: 0,
    left: 0
  }
});
