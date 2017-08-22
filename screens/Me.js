import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import { me } from '../config/data';
// var RNInstagramOAuth = require('react-native-instagram-oauth');



class Me extends Component {



  handleSettingsPress(){
    console.log('this is being pressed')
    this.props.navigation.navigate('Settings');
  };

  handleFeed(){
    this.props.navigation.navigate('Feed');
  };

  render() {

    return (
      <ScrollView>


        <Tile
          imageSrc={{ uri: this.props.picture.large}}
          featured
          title={`${this.props.name.first.toUpperCase()} ${this.props.name.last.toUpperCase()}`}
          caption={this.props.email}
        />

        <Button
          title="Settings"
          buttonStyle={{ marginTop: 20 }}
          onPress={(e)=>this.handleSettingsPress(e)}
        />

        <List>
          <ListItem
            title="Email"
            rightTitle={this.props.email}
            hideChevron
          />
          <ListItem
            title="Phone"
            rightTitle={this.props.phone}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Username"
            rightTitle={this.props.login.username}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Birthday"
            rightTitle={this.props.dob}
            hideChevron
          />
          <ListItem
            title="City"
            rightTitle={this.props.location.city}
            hideChevron
          />

          </List>
      </ScrollView>
    );
  }
}

Me.defaultProps = { ...me };

export default Me;
