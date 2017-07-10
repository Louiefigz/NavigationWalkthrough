import React from 'react';
import { TabNavigator,  StackNavigator } from 'react-navigation';

import Feed from '../screens/Feed';
import Me from '../screens/Me';


import Settings from '../screens/Settings';


 // **** remember to import UserDetail here *****


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



  export const FeedStack = StackNavigator({
    // Nest the components you would like.  Maybe feed and userdetail?

  });



export const Tabs = TabNavigator({
  Feed: {
    // You might wanna update the screen below 
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
  }
});
