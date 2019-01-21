import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import StyleConfig from '../helper/Styles'

export default class SideBarItem extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {leftIcon, itemPress, title, count, isActive, devider} = this.props;
        const {titleText, leftImageStyle} = styles
        return (
            <TouchableOpacity style={{
                alignItems: 'center',
                flexDirection: 'row',
                paddingVertical: StyleConfig.countPixelRatio(16),
                borderBottomWidth: devider? 1:0,
                borderColor: '#ccb'

            }}
                              onPress={itemPress}
            >
                {leftIcon ?
                    <View style={{paddingHorizontal: StyleConfig.countPixelRatio(16)}}>
                        <Image
                            source={leftIcon}
                            resizeMode={'stretch'}
                            style={{
                                height: StyleConfig.countPixelRatio(16),
                                width: StyleConfig.countPixelRatio(16),
                                tintColor: isActive? StyleConfig.headerTextColor : StyleConfig.disableIconColor,
                                paddingLeft: StyleConfig.countPixelRatio(16)
                            }}/>
                    </View>
                : <View/>}

                {title ? <Text style={[titleText, {color: isActive ? StyleConfig.headerTextColor : StyleConfig.disableIconColor}]}>{title}</Text> : null}
                {count ? <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <View style={{
                        marginRight: StyleConfig.countPixelRatio(16),
                        backgroundColor: 'blue',
                        height: StyleConfig.countPixelRatio(20),
                        width: StyleConfig.countPixelRatio(20),
                        borderRadius: StyleConfig.countPixelRatio(10),
                        borderWidth: 1,
                        borderColor: 'white',
                        justifyContent: 'center',
                        alignItems:'center'
                    }}>
                        <Text style={{color: 'white', fontSize: StyleConfig.fontSizeH3_4, fontWeight: 'bold'}}>{count}</Text>
                    </View>
                </View> : <View style={{flex: 1}}/>}
            </TouchableOpacity>
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
