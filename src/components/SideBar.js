import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground,
    FlatList
} from 'react-native'
import StyleConfig from '../helper/Styles'
import SideBarItem from "./SideBarItem";
import DashboardItem from "./DashboardItem";

const DATA = [
    {
        key: 1,
        icon: require('../images/menu/dashboard.png'),
        title: 'Dashboard'
    },
    {
        key: 2,
        icon: require('../images/menu/quizzes.png'),
        title: 'Quizzes'
    },
    {
        key: 3,
        icon: require('../images/menu/dashboard.png'),
        title: 'Category'
    },
    {
        key: 4,
        icon: require('../images/menu/live-game.png'),
        title: 'Live Game'
    },
    {
        key: 5,
        icon: require('../images/menu/assignment.png'),
        title: 'Assignment',
        count:3,
        devider:true
    },
    {
        key: 6,
        icon: require('../images/menu/logout.png'),
        title: 'Logout',
        devider:true
    },

]
export default class SideBar extends Component {
    constructor(props) {
        super(props);
        }
    itemPress(item){
        switch (item.key) {
            case 1:
                this.props.navigator.navigate('Dashboard');
                break ;
            case 2:
                this.props.navigator.navigate('Quiz');
                break ;
            case 3:
                this.props.navigator.navigate('Category');
                break ;
            case 4:
                this.props.navigator.navigate('Quiz');
                break ;
            case 5:
                this.props.navigator.navigate('Assignment');
                break ;
            case 6:
                this.props.navigator.navigate('Login');
                break ;
        }
        this.props.drawerClose()

    }

    render() {
        const { navigator } = this.props;
        console.log('side-',navigator.state.routeName)
        const {container, nameText, emailText} = styles
        let isActive = 1 ;
        for(let ind = 0 ; ind < DATA.length ; ind++ ){
            if(DATA[ind].title === navigator.state.routeName )
                isActive = DATA[ind].key
        }
        return (
            <View style={container}>
                <ImageBackground
                    source={require('./../images/menu/header_back.jpg')}
                    resizeMode={'stretch'}
                    style={{justifyContent: 'flex-end', width:'100%',height:StyleConfig.width*0.5}}>
                    <View style={{ backgroundColor: 'rgba(255,255,255,0.5)', paddingVertical: StyleConfig.countPixelRatio(8), paddingLeft: StyleConfig.countPixelRatio(16)}}>
                    <Text style={nameText}>John Doe</Text>
                    <Text style={emailText}>{'gohn.doe@gmail.com'}</Text>
                    </View>
                </ImageBackground>
                <FlatList
                    data={DATA}
                    renderItem={({item}) => <SideBarItem
                        title={item.title}
                        leftIcon={item.icon}
                        isActive={isActive === item.key}
                        count={item.count}
                        itemPress={this.itemPress.bind(this,item)}
                        devider={item.devider}
                    />}
                />

            </View>
        )
    }

}

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'white',
        //paddingTop: StyleConfig.isIphone ? StyleConfig.countPixelRatio(30) : StyleConfig.countPixelRatio(20),
    },
    nameText: {
        fontSize: StyleConfig.fontSizeH2_3,
    },
    emailText: {
        fontSize: StyleConfig.fontSizeH3_4,
    }


}
