import React from 'react';
import { TabNavigator,  StackNavigator } from 'react-navigation';

import Feed from '../screens/Feed';
import Me from '../screens/Me';
import ChildEli from '../screens/Eli';


import Settings from '../screens/Settings';
import UserDetail from '../screens/UserDetail';

//Stack is for more than one screen
// export const StackOfEli = StackNavigator({
//   ChildEli: {
//     screen: ChildEli,
//     navigationOptions: {
//       title: 'Eli'
//     }
//   }
// })


export const MeStack = StackNavigator({
  Me: {
    screen: Me,
    navigationOptions: {
      title: 'Me',
    },
  },
  Settings: {
    screen: Settings,
    navigationOptions:{
      title: 'SettingsDuh'
    }
  },
  Eli: {
    screen: ChildEli ,
    navigationOptions: {
      tabBarLabel: 'Eli',
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
        tabBarLabel: 'My Profile',
      },
    },
    // MySon: {
    //   screen: StackOfEli,
    //   navigationOptions: {
    //     tabBarLabel: 'MySon'
    //   },
    // },
  });
