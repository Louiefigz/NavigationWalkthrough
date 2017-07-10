import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class Settings extends Component {

  render() {
    return (
      <View>
      <ScrollView>
        <List>
          <ListItem
            title="Notifications"
          />
          <ListItem
            title="Profile"
          />
          <ListItem
            title="Password"
          />
        </List>
        <List>
          <ListItem
            title="Sign Out"

          />
        </List>
      </ScrollView>
      
      </View>
    );
  }
}

export default Settings;
