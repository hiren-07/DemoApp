import React, {Component} from 'react'
import {
    View,

} from 'react-native'
import StyleConfig from '../helper/Styles'

export default class ProgressBar extends Component {
    constructor(props) {
        super(props);
        this.state={progress:1}
        this.startProgress();
    }
    startProgress(){
        let {progress} = this.state
        this.MyInterval = setInterval(()=>{
            progress++;
            if(progress < 498)
                this.setState({progress})
            else {
                this.props.onProgressDone()
                clearInterval(this.MyInterval)
            }
        },10)
    }
    render() {
        const {width, } = this.props;
        const {progress } = this.state;
        return (
            <View style={{
                width: width,
                backgroundColor: '#888',
                borderWidth:1,
                borderColor:'#888',
                borderRadius:StyleConfig.countPixelRatio(12),
                margin: StyleConfig.countPixelRatio(8),
            }}>
                <View
                    style={{
                        borderWidth:1,
                        borderColor:StyleConfig.headerTextColor,
                        borderRadius:StyleConfig.countPixelRatio(12),
                        width: width*progress/500,
                        height: StyleConfig.countPixelRatio(24),
                        backgroundColor: StyleConfig.headerTextColor}}
                />
            </View>
        )
    }

}
