import React, { Component } from 'react';
import { StyleSheet, Platform, View, TouchableOpacity, FlatList, Text, Image, Alert, YellowBox } from 'react-native';
import {navigationOptions} from 'react-navigation';
import Header from "../components/Header";
export default class SubCategorieScreen extends Component {
    static navigationOptions = {
      title: 'Sub Category',
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    };
    constructor(props) {
     super(props);
     this.state = {
      isLoading: true
      }
      YellowBox.ignoreWarnings([
     'Warning: componentWillMount is deprecated',
     'Warning: componentWillReceiveProps is deprecated',
   ]);

 }

 FlatListItemSeparator = () => {
   return (
     <View
       style={{
         height: 1,
         width: "100%",
         backgroundColor: "#cccccc",
       }}
     />
   );
 }
 render() {
   const items = [
     { name:'Names of Allah 1-10', subName:'10/03/2018',number:'100',list:'10' }, { name:'Names of Allah 1-10 ', subName:'10/03/2018',number:'100',list:'10' },
     { name:'Names of Allah 1-10 ', subName:'10/03/2018',number:'100',list:'10' }, { name:'Names of Allah 1-10 ', subName:'10/03/2018',number:'100',list:'10' },
     { name:'Names of Allah 1-10 ', subName:'10/03/2018',number:'100',list:'10' }, { name:'Names of Allah 1-10 ', subName:'10/03/2018',number:'100',list:'10' },
     { name:'Names of Allah 1-10 ', subName:'10/03/2018',number:'100',list:'10' }, { name:'Names of Allah 1-10 ', subName:'10/03/2018',number:'100',list:'10' },
     { name:'Names of Allah 1-10 ', subName:'10/03/2018',number:'100',list:'10' },{ name:'Names of Allah 1-10 ', subName:'10/03/2018',number:'100',list:'10' },
     { name:'Names of Allah 1-10 ', subName:'10/03/2018',number:'100',list:'10' }, { name:'Names of Allah 1-10 ', subName:'10/03/2018',number:'100',list:'10' },
     { name:'Names of Allah 1-10 ', subName:'10/03/2018',number:'100',list:'10' }, { name:'Names of Allah 1-10 ', subName:'10/03/2018',number:'100',list:'10' },

   ];

    return (
       <View style={styles.MainContainer}>
           <Header title={'Sub Category'}
                    leftIcon={require('../images/dashboard/ic_back.png')}
                   onLeftIconPress={()=> this.props.navigation.pop()}
           />
         <FlatList
          data={ items }
           ItemSeparatorComponent = {this.FlatListItemSeparator}
            renderItem={({item}) =>
             <View style={{flex:1, flexDirection: 'row'}}>
                <View style={{flex:.3, flexDirection: 'row',margin:4}}>
                  <Image source={require('../images/category/allah.png')} style={styles.imageView} />
                 </View>
                 <View style={{flex:1, flexDirection: 'column',margin:4}}>
                     <View style={{flex:1,justifyContent:'flex-end'}} >
                      <Text  style={styles.textView} >{item.name}</Text>
                      </View>
                     <View style={{flex:1, flexDirection: 'row'}}>

                         <Image source={require('../images/subcategory/date-picker.png')} style={{height:10,width:10,margin:3}} />
                          <Text style={styles.subtextView} >{item.subName}</Text>
                         <Image source={require('../images/subcategory/play1.png')} style={{height:10,width:10,margin:4}} />
                          <Text style={styles.subtextView} >{item.number}</Text>
                         <Image source={require('../images/subcategory/list.png')} style={{height:10,width:10,margin:4}} />
                         <Text style={styles.subtextView} >{item.list}</Text>
                      </View>
                  </View>
                  <View style={{flex:.5,flexDirection: 'row',alignItems:'center',margin:4}}>
                      <Image source={require('../images/subcategory/learn.png')} style={{height:40,width:40,margin:5}} />
                      <TouchableOpacity onPress={()=> this.props.navigation.navigate('Quiz')}>
                      <Image source={require('../images/subcategory/play.png')} style={{height:40,width:40,margin:1}} />
                      </TouchableOpacity>
                  </View>
              </View>
           }
           keyExtractor={(item, index) => index.toString()}
        />
      </View>
   );
 }
}

const styles = StyleSheet.create({
  MainContainer :{
    flex:1,
 },

 imageView: {
    width: 46,
    height: 46,
    margin: 7,
    borderRadius:23
  },

textView: {
    fontWeight: "bold",
    textAlignVertical:'center',
    fontSize: 16,
    color: '#000',
    margin:4


},
SubtextView: {

    fontSize: 8,
    textAlignVertical:'center',
    color: '#000',


}


});
