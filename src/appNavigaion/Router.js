/**
 * Sample React Native Router
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LoginScreen from '../screens/LoginScreeen'
import DashboardScreen from '../screens/DashboardScreen';
import CategoryScreen from '../screens/CategoryScreen';
import SubCategoryScreen from '../screens/SubCategorieScreen';
import AssignmentScreen from '../screens/AssignmentScreen';
import QuizScreen from '../screens/QuizScreen';
import AnswerScreen from '../screens/AnswerScreen';
import {createAppContainer, createStackNavigator} from 'react-navigation';

const Router = createStackNavigator({

    Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null, //this will hide the header
            title: 'Login'
        },
    },
    Dashboard: {
        screen: DashboardScreen,
        navigationOptions: {
            header: null, //this will hide the header
            title: 'Dashboard'
        },
    },
    Category: {
        screen: CategoryScreen,
        navigationOptions: {
            header: null, //this will hide the header
            title: 'Category'
        },
    },
    SubCategory: {
        screen: SubCategoryScreen,
        navigationOptions: {
            header: null, //this will hide the header
            title: 'SubCategory'
        },
    },
    Assignment: {
        screen: AssignmentScreen,
        navigationOptions: {
            header: null, //this will hide the header
            title: 'Assignment'
        },
    },
    Quiz: {
        screen: QuizScreen,
        navigationOptions: {
            header: null, //this will hide the header
            title: 'Quiz'
        },
    },
    Answer: {
        screen: AnswerScreen,
        props:{},
        navigationOptions: {
            header: null, //this will hide the header
            title: 'Answer'
        },
    }
});

export default createAppContainer(Router);
const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
