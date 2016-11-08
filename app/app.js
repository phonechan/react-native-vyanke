/**
 * Created by chenfeng on 2016/10/12.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
    StatusBar,
} from 'react-native';

//引入tabbar支持包
import TabNavigator from 'react-native-tab-navigator';

import FirstPage from './view/first';
import SecondPage from './view/second';
import ThirdPage from './view/third';
import FourthPage from './view/fourth';

const TabNavigatorItem =TabNavigator.Item;

const TAB_NORMAL_1=require('./view/imgs/tabbar_1.png');
const TAB_NORMAL_2=require('./view/imgs/tabbar_2.png');
const TAB_NORMAL_3=require('./view/imgs/tabbar_3.png');
const TAB_NORMAL_4=require('./view/imgs/tabbar_4.png');

const TAB_PRESS_1=require('./view/imgs/tabbar_1_press.png');
const TAB_PRESS_2=require('./view/imgs/tabbar_2_press.png');
const TAB_PRESS_3=require('./view/imgs/tabbar_3_press.png');
const TAB_PRESS_4=require('./view/imgs/tabbar_4_press.png');

export default class app extends Component {

    constructor(){
        super();
        this.state = {
            selectedTab: 'FirstPage',
        }
    }

    onPress(tabName){
        if (tabName){
            this.setState({
               selectedTab: tabName,
            });
        }
    }

    renderTabView(title, tabName, tabContent){
        var tabNormal;
        var tabPress;
        switch (tabName){
            case 'FirstPage':
                tabNormal = TAB_NORMAL_1;
                tabPress = TAB_PRESS_1;
                break;
            case 'SecondPage':
                tabNormal = TAB_NORMAL_2;
                tabPress = TAB_PRESS_2;
                break;
            case 'ThirdPage':
                tabNormal = TAB_NORMAL_3;
                tabPress = TAB_PRESS_3;
                break;
            case 'FourthPage':
                tabNormal = TAB_NORMAL_4;
                tabPress = TAB_PRESS_4;
                break;
            default:
                break;
        }
        return(
            <TabNavigatorItem
                title={title}
                renderIcon={()=><Image style={styles.tabIcon} source={tabNormal}/>}
                renderSelectedIcon={()=><Image style={styles.tabIcon} source={tabPress} />}
                selected={this.state.selectedTab===tabName}
                selectedTitleStyle={{color:'#f85959'}}
                onPress={()=>this.onPress(tabName)}
            >
                {
                    //tabName=='FirstPage'?<FirstPage />:<View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>{tabContent}</Text></View>
                    this.tabItemView(tabName)
                }

            </TabNavigatorItem>
        );
    }

    tabBarView(){
        return (
           <View style={{flex:1}}>
               <TabNavigator tabBarStyle={styles.tab}>
                   {this.renderTabView('首页','FirstPage','首页模块')}
                   {this.renderTabView('视频','SecondPage','视频模块')}
                   {this.renderTabView('关注','ThirdPage','关注模块')}
                   {this.renderTabView('我的','FourthPage','我的模块')}
               </TabNavigator>
           </View>
        );
    }

    tabItemView(tabName){
        switch (tabName){
            case 'FirstPage':
                return <FirstPage />
            break;

            case 'SecondPage':
                return <SecondPage />
                break;

            case 'ThirdPage':
                return <ThirdPage />
                break;

            case 'FourthPage':
                return <FourthPage />
                break;

            default:
                break;
        }
    }

    render() {
        var tabBarView = this.tabBarView();
        return(
            <View style={styles.container}>
                {tabBarView}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    tab:{
        height: 52,
        alignItems:'center',
        backgroundColor:'#f4f5f6',
    },
    tabIcon:{
        width:25,
        height:25,
    },
});