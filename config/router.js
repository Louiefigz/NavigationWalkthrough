import React from 'react';
import { TabNavigator,  StackNavigator } from 'react-navigation';

import Feed from '../screens/Feed';
import Me from '../screens/Me';


import Settings from '../screens/Settings';
import UserDetail from '../screens/UserDetail';
import EditMe from '../screens/EditMeProfile';




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
  Edit: {
    screen: EditMe,
    navigationOptions:{
      title: 'Edit Profile'
    }, 
  }
});



  export const FeedStack = StackNavigator({
    Feed: {
    screen: Feed,
    navigationOptions: {
      title: 'Feed',
    },
  },
    Details: {
      screen: UserDetail,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
      }),
    },
  });



export const Tabs = TabNavigator({
  Feed: {
    screen: FeedStack,
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
