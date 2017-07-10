import React from 'react';
import { TabNavigator,  StackNavigator } from 'react-navigation';

import Feed from '../screens/Feed';
import Me from '../screens/Me';


import Settings from '../screens/Settings';


export const MeStack = StackNavigator({
  Me: {
    screen: Me,
    navigationOptions: {
      title: 'Me',
    },
  },
  Settings: {
    screen: Settings,

  },
});




export const Tabs = TabNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      tabBarLabel: 'Feed',
    },
  },
  Me: {
    screen: MeStack,
    navigationOptions: {
      tabBarLabel: 'Me',
    },
  },
});
