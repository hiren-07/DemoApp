import React, { Component } from 'react';
import { StyleSheet, Platform, View, ActivityIndicator, FlatList, Text, Image, Alert, YellowBox } from 'react-native';
import {navigationOptions} from 'react-navigation';
import Header from "../components/Header";
import AssignmentItem from "../components/AssignmentItem";
import StyleConfig from '../helper/Styles'

export default class AssignmentScreen extends Component {
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
                        rightIcon={require('../images/dashboard/ic_filter.png')}
                        onRightIconPress={()=> alert('filter click')}
                />
                <FlatList
                    data={ items }
                    ItemSeparatorComponent = {this.FlatListItemSeparator}
                    renderItem={({item}) =>
                        <AssignmentItem
                            title={'Noun Sheet'}
                            startDate={'01/01/2019'}
                            endDate={'31/01/2019'}
                            correct = {55}
                            incorrect={45}
                            score={3423}
                            progress={'100%'}
                            onItemClick={()=>alert('item click')}
                        />
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
        backgroundColor:StyleConfig.appBackground
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
