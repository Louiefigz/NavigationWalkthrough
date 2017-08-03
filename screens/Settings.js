import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class Settings extends Component {

  handlePress(){
    this.props.navigation.navigate('Feed'); 
  }

  render() {
    return (
      <View>
      <ScrollView>
        <List>
          <ListItem
            title="Notifications"
            onPress={(e)=> this.handlePress(e)}
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
