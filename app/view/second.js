/**
 * Created by PhoneChan on 12/10/2016.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
} from 'react-native';

export default class SecondPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            loaded: false,
        };
    }

    componentDidMount(){
        this.getRows();
    }

    render() {

        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return(
            <View style={styles.listView}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => this.renderRow(rowData)}
                />
            </View>
        );
    }

    getRows() {
        let data = require('./data/2017考研政治强化V研课-马原.json');
        var videoList = data.videoList;
        var rows = [];
        for(var i = 0 ; i < videoList.length; i++){
            rows.push(videoList[i]);
            console.log('push to rows : ' + videoList[i].image);
        }
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(rows),
            loaded: true,
        });
    }

    renderLoadingView(){
        return (
            <View style={styles.container}>
                <Text>
                    Loading ...
                </Text>
            </View>
        );
    }

    renderRow(rowData){
        return(
            <View style={styles.container}>
                <Image source={{uri: 'http://img.vyanke.com/2016/0823/f49140662ec478a87ff5cd9a846f4ef1.jpg'}} style={styles.thumbnail} />
                <Text style={styles.title}>{rowData.name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 14,
        marginBottom: 8,
        textAlign: 'center',
    },
    thumbnail: {
        width: 53,
        height: 81,
    },
});