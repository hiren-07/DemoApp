import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import StyleConfig from '../helper/Styles'

export default class QuizButton extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { title, onPress, style} = this.props;
        const {titleText, leftImageStyle} = styles
        return (
            <TouchableOpacity
                onPress={onPress}
                style={[style,{
                borderWidth: StyleConfig.countPixelRatio(6),
                borderRadius: StyleConfig.countPixelRatio(2),
                marginVertical: StyleConfig.countPixelRatio(2),
                alignItems: 'center',
                height:StyleConfig.height*0.1,
                justifyContent: 'center'
            }]}>
                <Text style={titleText}>{title}</Text>
            </TouchableOpacity>
        )
    }

}

const styles = {
    titleText: {
        fontSize: StyleConfig.fontSizeH3,
        fontWeight: "bold",
        color: 'white',

    }
}
