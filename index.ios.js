/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Root } from './config/router';
import { AppRegistry } from 'react-native';

export default class NavigationWalkthrough extends Component {
  render() {
    return (
      < Root />
    );
  }
}


AppRegistry.registerComponent('NavigationWalkthrough', () => NavigationWalkthrough);
