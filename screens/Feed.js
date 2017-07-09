import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { users } from '../config/data';


class Feed extends Component {


  render() {
    return (
      <ScrollView>
        <List>

        </List>
      </ScrollView>
    );
  }
}

export default Feed;
