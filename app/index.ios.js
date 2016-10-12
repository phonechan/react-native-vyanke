/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    TabBarIOS,
    Text,
    View,
    AppRegistry,
} from 'react-native';

import FirstPage from './view/first.js';
import SecondPage from './view/second.js';
import ThreePage from './view/three.js';
import FourthPage from './view/fourth.js';

// 定义TabbarView
const tabBarTintColor = '#f8f8f8';// 标签栏的背景颜色
const tabTintColor = '#3393F2'; // 被选中图标颜色\

class app extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab:'first',
        };
    }

    render() {
        return (
            <TabBarIOS
                ref='tabbar'
                tintColor={tabTintColor}
                barTintColor={tabBarTintColor}>
                {this._createTabbarItem('首页',require('./view/imgs/bank.png'),'first')}
                {this._createTabbarItem('视频',require('./view/imgs/film.png'),'second')}
                {this._createTabbarItem('订单',require('./view/imgs/food.png'),'three')}
                {this._createTabbarItem('我的',require('./view/imgs/toilet.png'),'fourth')}
            </TabBarIOS>
        );
    }

    // 创建TabBarIOS.Item
    _createTabbarItem(title,icon,selectedTab){
        return (
            <TabBarIOS.Item
                title={title}
                icon={icon}
                selected={this.state.selectedTab === selectedTab}
                onPress={() => {
                this.setState({
                    selectedTab:selectedTab,
                });
            }}>
                {this._renderComponent(this.state.selectedTab)}
            </TabBarIOS.Item>
        );
    }

    // 根据selectedTab 确定模块
    _renderComponent(selectedTab){
        if (selectedTab === 'first') {
            return <FirstPage navigator={this.props.navigator} />
        } else if (selectedTab === 'second') {
            return <SecondPage navigator={this.props.navigator} />
        } else if (selectedTab === 'three') {
            return <ThreePage navigator={this.props.navigator} />
        }else if (selectedTab === 'fourth') {
            return <FourthPage navigator={this.props.navigator} />
        }
    }

}

const styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        alignItems: 'center',
    },
    tabText: {
        color: 'white',
        margin: 50,
    },
});


AppRegistry.registerComponent('app', () => app);
