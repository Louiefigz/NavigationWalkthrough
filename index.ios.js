/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Tabs } from './config/router';
import { AppRegistry } from 'react-native';

export default class NavigationWalkthrough extends Component {
  render() {
    return (
      < Tabs />
    );
  }
}

// initialize your redux object with the information from config/data.



AppRegistry.registerComponent('NavigationWalkthrough', () => NavigationWalkthrough);
