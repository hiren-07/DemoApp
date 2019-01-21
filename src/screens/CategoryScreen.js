import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import GridView from 'react-native-super-grid';
import {navigationOptions} from 'react-navigation';
import {Button, Drawer} from 'native-base';
import SideBar from "../components/SideBar";
import Header from "../components/Header";

export default class CategoryScreen extends Component {
    static navigationOptions = {
        title: 'Category',
        headerLeft: null,
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    };
    closeDrawer = () => {
        this.drawerCat._root.close()
    };
    openDrawer = () => {
        this.drawerCat._root.open()
    };

    render() {
        // Taken from https://flatuicolors.com/
        const items = [
            {name: 'Salah', code: '#1abc9c'},
            {name: 'Quran', code: '#3498db'},
            {name: 'Salah', code: '#34495e'},
            {name: 'Salah', code: '#34495e'},
            {name: 'Quran', code: '#27ae60'},
            {name: 'Quran', code: '#8e44ad'},
            {name: 'Quran', code: '#f1c40f'},
            {name: 'Salah', code: '#e74c3c'},
            {name: 'Salah', code: '#e74c3c'},
            {name: 'Salah', code: '#e74c3c'},
        ];

        return (
            <Drawer
                ref={(ref) => {
                    this.drawerCat = ref;
                }}
                content={<SideBar navigator={this.props.navigation} drawerClose={()=> this.closeDrawer()} />}
                onClose={() => this.closeDrawer()}>
                <View style={{flex: 1}}>
                    <Header
                        title={'Category'}
                        leftIcon={require('../images/dashboard/menu.png')}
                        onLeftIconPress={this.openDrawer}
                    />
                    <GridView
                        itemDimension={130}
                        items={items}
                        style={styles.gridView}
                        renderItem={item => (

                            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('SubCategory')}>
                                <View style={[styles.itemContainer, {backgroundColor: 'white'}]}>
                                    <Image style={styles.imgStyle} source={require('../images/category/arabic.png')}/>
                                    <Text style={styles.itemName}>{item.name}</Text>
                                    <Text style={styles.itemCode}>{"Quiz about Salah"}</Text>
                                </View>
                            </TouchableWithoutFeedback>

                        )}
                    />
                </View>
            </Drawer>
        );
    }
}

const styles = StyleSheet.create({
    gridView: {
        flex: 1,
        //backgroundColor:'lightgray'
    },
    imgStyle: {
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        flex: 1,
        resizeMode: 'center',
        alignItems: 'center',

    },
    itemContainer: {
        borderColor: 'lightgray',
        borderRadius: 5,
        borderWidth: 1,
        padding: 10,
        height: 150,
        flex: 1
    },
    itemName: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: 'black',
        textAlign: 'center',
    },
});
