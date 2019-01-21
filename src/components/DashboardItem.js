import React,{Component} from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import StyleConfig from './../helper/Styles'
const width = (StyleConfig.width/2) - StyleConfig.countPixelRatio(32)
export default class DashboardItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {itemIcon, count, title, graphIcon,key} = this.props
        const {titleText, countText} = styles
        return(
            <TouchableOpacity style={[StyleConfig.cardStyle, {
                height: width*0.9,
                width: width,
                flexDirection:'column',
                marginTop:StyleConfig.countPixelRatio(12),
                marginLeft:key%2 === 0 ? 0 : StyleConfig.countPixelRatio(12),
                marginRight:key%2 === 0 ? StyleConfig.countPixelRatio(12): 0}]}>
                <View style={{flexDirection: 'row', padding: StyleConfig.countPixelRatio(8)}}>
                    <Image
                        source={itemIcon}
                        resizeMode={'contain'}
                        style={{
                            height: StyleConfig.countPixelRatio(24),
                            width: StyleConfig.countPixelRatio(24),

                        }}/>
                    <View style={{flex:1, alignItems: 'flex-end'}}>
                        <Text style={countText}>{count}</Text>
                        <Text style={titleText}>{title.toUpperCase()}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row',padding:StyleConfig.countPixelRatio(8)}}>
                    <Image
                        resizeMode={'stretch'}
                        source={graphIcon}
                        style={{width:width-16, height: width/3}}
                    />
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = {
    titleText: {
        fontSize: StyleConfig.fontSizeH4,
        fontWeight: "bold",
        color: '#333'
    },
    countText:{
        fontSize: StyleConfig.fontSizeH2_3,
        fontWeight: "bold",
        color: '#999'
    }

}
