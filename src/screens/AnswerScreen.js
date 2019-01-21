import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import {navigationOptions} from 'react-navigation';
import StyleConfig from './../helper/Styles'


export default class AnswerScreen extends Component {

    render() {
        const {container, content, dateText} = styles
        const {res} =this.props
        alert(res)
        return (
            <View style={[container, {backgroundColor: res?'green':'red'}]}>
                            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: StyleConfig.appBackground
    },
    content: {
        flex: 1,
        marginHorizontal: StyleConfig.countPixelRatio(16),
        marginBottom: StyleConfig.isIphoneX? StyleConfig.countPixelRatio(20) : 0
    },
    dateText:{
        fontSize:StyleConfig.fontSizeH4
    }
});
