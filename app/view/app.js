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

import Home from './Home';

const TabNavigatorItem =TabNavigator.Item;

const TAB_NORMAL_1=require('./imgs/tabbar_1.png');
const TAB_NORMAL_2=require('./imgs/tabbar_2.png');
const TAB_NORMAL_3=require('./imgs/tabbar_3.png');
const TAB_NORMAL_4=require('./imgs/tabbar_4.png');

const TAB_PRESS_1=require('./imgs/tabbar_1_press.png');
const TAB_PRESS_2=require('./imgs/tabbar_2_press.png');
const TAB_PRESS_3=require('./imgs/tabbar_3_press.png');
const TAB_PRESS_4=require('./imgs/tabbar_4_press.png');

export default class app extends Component {

    constructor(){
        super();
        this.state = {
            selectedTab: 'Home',
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
            case 'Home':
                tabNormal = TAB_NORMAL_1;
                tabPress = TAB_PRESS_1;
                break;
            case 'Video':
                tabNormal = TAB_NORMAL_2;
                tabPress = TAB_PRESS_2;
                break;
            case 'Follow':
                tabNormal = TAB_NORMAL_3;
                tabPress = TAB_PRESS_3;
                break;
            case 'Mine':
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
                    tabName=='Home'?<Home />:<View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>{tabContent}</Text></View>
                }

            </TabNavigatorItem>
        );
    }

    tabBarView(){
        return (
           <View style={{flex:1}}>
               <TabNavigator tabBarStyle={styles.tab}>
                   {this.renderTabView('首页','Home','首页模块')}
                   {this.renderTabView('视频','Video','视频模块')}
                   {this.renderTabView('关注','Follow','关注模块')}
                   {this.renderTabView('我的','Mine','我的模块')}
               </TabNavigator>
           </View>
        );
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