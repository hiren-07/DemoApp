import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import StyleConfig from '../helper/Styles'

export default class Header extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {leftIcon, onLeftIconPress, title, rightIcon, onRightIconPress} = this.props;
        const {titleText, leftImageStyle} = styles
        return (
            <View style={{
                backgroundColor: 'white',
                height: StyleConfig.headerHeight,
                paddingTop: StyleConfig.isIphone ? StyleConfig.countPixelRatio(30) : StyleConfig.countPixelRatio(0),
                alignItems: 'center',
                flexDirection: 'row'
            }}>
                {leftIcon ? <View style={{flex: 1}}>
                    <TouchableOpacity style={{paddingHorizontal: StyleConfig.countPixelRatio(12)}} onPress={onLeftIconPress}>
                    <Image
                        source={leftIcon}
                        style={{
                            height: StyleConfig.countPixelRatio(16),
                            width: StyleConfig.countPixelRatio(16),
                            tintColor: StyleConfig.headerTextColor,
                            paddingLeft: StyleConfig.countPixelRatio(16)
                        }}/>
                    </TouchableOpacity>
                </View> : <View style={{flex:1}}/>}

                {title ? <Text style={titleText}>{title}</Text> : null}
                {rightIcon ? <View style={{flex: 1}}>
                    <TouchableOpacity style={{paddingHorizontal: StyleConfig.countPixelRatio(12), alignItems:'flex-end'}} onPress={onRightIconPress}>
                        <Image
                            source={rightIcon}
                            style={{
                                height: StyleConfig.countPixelRatio(16),
                                width: StyleConfig.countPixelRatio(16),
                                tintColor: StyleConfig.headerTextColor,
                                paddingLeft: StyleConfig.countPixelRatio(16)
                            }}/>
                    </TouchableOpacity>
                </View> : <View style={{flex:1}}/>}
            </View>
        )
    }

}

const styles = {
    titleText: {
        fontSize: StyleConfig.fontSizeH3,
        fontWeight: "500",
        color: StyleConfig.headerTextColor
    }
}
