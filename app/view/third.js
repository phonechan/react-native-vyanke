/**
 * Created by PhoneChan on 12/10/2016.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class ThirdPage extends Component {

    render(){
        return(
            <View style={styles.content}>
                <Text>这是第三页</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
    },
});