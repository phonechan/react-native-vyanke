/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';

import MyVideo from './view/Video.js';

class app extends Component {

  render() {
    return(
        <MyVideo uri='broadchurch'>

        </MyVideo>
    );
  }
}


AppRegistry.registerComponent('app', () => app);
