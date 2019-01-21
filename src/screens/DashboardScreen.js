import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import { Drawer } from 'native-base'
import {navigationOptions} from 'react-navigation';
import StyleConfig from './../helper/Styles'
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import DashboardItem from "../components/DashboardItem";

const DATA = [
    {
        key: 1,
        itemIcon: require('../images/dashboard/assignment.png'),
        count: '1',
        title: 'ASSIGNMENT',
        graphIcon: require('../images/dashboard/ic_graph.jpg')
    },
    {
        key: 2,
        itemIcon: require('../images/dashboard/quizzes.png'),
        count: '3',
        title: 'quizzes completed',
        graphIcon: require('../images/dashboard/ic_graph.jpg')
    },
    {
        key: 3,
        itemIcon: require('../images/dashboard/avg_score.png'),
        count: '32%',
        title: 'AVG. SCORE',
        graphIcon: require('../images/dashboard/ic_graph.jpg')
    },
    {
        key: 4,
        itemIcon: require('../images/dashboard/total_score.png'),
        count: '15364',
        title: 'TOTAL SCORE',
        graphIcon: require('../images/dashboard/ic_graph.jpg')
    },
    {
        key: 5,
        itemIcon: require('../images/dashboard/live-game.png'),
        count: '0',
        title: 'LIVE GAMES',
        graphIcon: require('../images/dashboard/ic_graph.jpg')
    },
    {
        key: 6,
        itemIcon: require('../images/dashboard/time-spent.png'),
        count: '0h 24m',
        title: 'TIME SPENT',
        graphIcon: require('../images/dashboard/ic_graph.jpg')
    },

]

export default class DashboardScreen extends Component {
    closeDrawer = () => {
        this.drawer._root.close()
    };
    openDrawer = () => {
        this.drawer._root.open()
    };
    render() {
        const {container, content, dateText} = styles

        return (
            <View style={container}>
                <Drawer
                    ref={(ref) => { this.drawer = ref; }}
                    content={<SideBar navigator={this.props.navigation} drawerClose={()=>this.drawer._root.close()} />}
                    onClose={() => this.closeDrawer()} >

                <Header
                    title={'Dashboard'}
                    leftIcon={require('../images/dashboard/menu.png')}
                    onLeftIconPress={this.openDrawer}
                />
                <View style={content}>

                    <FlatList
                        data={DATA}
                        numColumns={2}
                        renderItem={({item}) => <DashboardItem
                            key={item.key}
                            itemIcon={item.itemIcon}
                            count={item.count}
                            title={item.title}
                            graphIcon={item.graphIcon}
                        />}
                    />
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: StyleConfig.countPixelRatio(8)
                    }}>
                        <Text>{'Graph'}</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image
                                source={require('../images/dashboard/date-picker.png')}
                                resizeMode={'stretch'}
                                style={{
                                    width: StyleConfig.countPixelRatio(10),
                                    height: StyleConfig.countPixelRatio(10),
                                    marginRight: StyleConfig.countPixelRatio(6)
                                }}
                            />
                            <Text style={dateText}>{'28/12/2018-27/01/2019'}</Text>
                        </View>
                    </View>
                    <View>
                        <Image
                            style={{
                                width: StyleConfig.width - StyleConfig.countPixelRatio(32),
                                height: StyleConfig.width * 0.5
                            }}
                            resizeMode={'stretch'}

                            source={require('../images/dashboard/ic_graph.jpg')}
                        />
                    </View>
                </View>
                </Drawer>
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
