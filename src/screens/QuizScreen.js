import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {navigationOptions} from 'react-navigation';
import StyleConfig from './../helper/Styles'
import ProgressBar from "../components/ProgressBar";
import QuizButton from "../components/QuizButton";

const progressWidth = StyleConfig.width * 0.75;
export default class QuizScreen extends Component {
    constructor(props) {
        super(props);
    }

    checkAns(index){
        const trueIndex = 2
        const res = index===trueIndex?true:false
        this.props.navigation.navigate('Answer',{ res : 2 })
    }
    render() {
        const {container, content, dateText} = styles

        return (
            <View style={[container]}>
                <View style={content}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{fontSize: StyleConfig.fontSizeH3, letterSpacing: 0.4}}>1/2</Text>
                        <ProgressBar
                            onProgressDone={()=> console.log('Time Over')}
                            width={progressWidth} />
                        <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                            <Image
                                style={{
                                    height: StyleConfig.countPixelRatio(24),
                                    width: StyleConfig.countPixelRatio(24),
                                    tintColor: '#555'
                                }}
                                source={require('../images/dashboard/ic_close.png')}

                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
                        <Text style={{ fontSize:StyleConfig.fontSizeH2_3,
                            fontWeight: 'bold'
                        }}>{'What is the meaning of'}</Text>
                        <Image
                        source={require('../images/dashboard/ic_que.png')}
                        />
                    </View>
                    <View style={{}}>
                        <QuizButton onPress={()=>this.checkAns(1)} style={{backgroundColor: '#FF1E05', borderColor:'#E71C08'}} title={"The Mercy of"}/>
                        <QuizButton onPress={()=>this.checkAns(2)} style={{backgroundColor: '#FF6F00', borderColor:'#D45C00'}} title={"In the Name"}/>
                        <QuizButton onPress={()=>this.checkAns(3)} style={{backgroundColor: '#4352BD', borderColor:'#3D4BAB'}} title={"Where"}/>
                        <QuizButton onPress={()=>this.checkAns(4)} style={{backgroundColor: '#32AA32', borderColor:'#2D912D'}} title={"The Power of"}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StyleConfig.isIphone ? StyleConfig.countPixelRatio(30) : 0,
        backgroundColor: StyleConfig.appBackground
    },
    content: {
        flex: 1,
        paddingHorizontal: StyleConfig.countPixelRatio(8),
        marginBottom: StyleConfig.isIphoneX ? StyleConfig.countPixelRatio(20) : 0,
        backgroundColor: '#fff'
    },
    dateText: {
        fontSize: StyleConfig.fontSizeH4
    }
});
