import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import StyleConfig from '../helper/Styles'

export default class AssignmentItem extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {title, startDate, endDate, correct, incorrect, score, progress, onItemClick} = this.props;
        const {titleText, dateText, scoreText, currText} = styles
        return (
            <TouchableOpacity onPress={onItemClick}
                              style={{
                                  flexDirection: 'row', paddingTop: StyleConfig.countPixelRatio(8),
                                  paddingBottom: StyleConfig.countPixelRatio(4),
                                  paddingHorizontal: StyleConfig.countPixelRatio(16)
                              }}>
                <View style={{flex: 1}}>
                    <Text style={titleText}>{title}</Text>
                    <Text style={dateText}>{'Start Date: ' + startDate}</Text>
                    <Text style={dateText}>{'End Date: ' + endDate}</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                    <Text style={scoreText}>{score}</Text>
                    <View>
                        <View style={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            alignItems: 'center'

                        }}>
                            <Text style={currText}>{'Correct'}</Text>
                            <View style={{
                                flexDirection: 'row',
                                marginVertical: StyleConfig.countPixelRatio(4)
                            }}>
                                <View style={{
                                    borderColor: 'red',
                                    borderRadius: StyleConfig.countPixelRatio(4),
                                    borderWidth: 1,
                                }}>
                                    <Text style={[currText, {
                                        color: 'white',
                                        fontWeight: 'bold',
                                        backgroundColor: 'red'
                                    }]}>{correct + '%'}</Text></View>
                                <View style={{
                                    borderColor: 'green',
                                    borderRadius: StyleConfig.countPixelRatio(4),
                                    borderWidth: 1,
                                }}>
                                    <Text style={[currText, {
                                        color: 'white',
                                        fontWeight: 'bold',
                                        backgroundColor: 'green'
                                    }]}>{incorrect + '%'}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Text style={currText}>{'Progress'}</Text>
                            <View style={{
                                borderColor: '#00A0BE',
                                borderRadius: StyleConfig.countPixelRatio(4),
                                borderWidth: 1,
                            }}>
                                <Text style={[currText, {
                                    color: 'white',
                                    fontWeight: 'bold',
                                    backgroundColor: '#00A0BE',
                                    paddingHorizontal: StyleConfig.countPixelRatio(16)
                                }]}>{progress}</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </TouchableOpacity>
        )
    }

}

const styles = {
    titleText: {
        fontSize: StyleConfig.fontSizeH3,
        fontWeight: "500",
        paddingVertical: StyleConfig.countPixelRatio(4)
    },
    dateText: {
        fontSize: StyleConfig.fontSizeH3_4,
        color: '#555',
        paddingVertical: StyleConfig.countPixelRatio(2)
    },
    scoreText: {
        backgroundColor: '#4B92D4',
        color: '#eee',
        fontSize: StyleConfig.fontSizeH3_4,
        paddingVertical: StyleConfig.countPixelRatio(2),
        paddingHorizontal: StyleConfig.countPixelRatio(4)
    },
    currText: {
        fontSize: StyleConfig.fontSizeH3_4,
        paddingHorizontal: StyleConfig.countPixelRatio(4)
    }
}
