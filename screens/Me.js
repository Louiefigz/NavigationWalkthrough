import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import { me } from '../config/data';
var RNInstagramOAuth = require('react-native-instagram-oauth');


 //
 //
 // var instagram: {
 //     client_id: '<YOUR CLIENT ID>',
 //     redirect_url: '<YOUR REDIRECT URL>'  // e.g.: 'test://init'
 // };

 // function getInstagramByMyself (access_token) {
 //    fetch('https://api.instagram.com/v1/users/self/?access_token='+access_token)
 //        .then((response) => response.json()).then((responseData) => {
 //            console.log(responseData);
 //        });
 // }
 //
 // RNInstagramOAuth(instagram.client_id, instagram.redirect_url, (err, access_token) => {
 //    if (err) { console.log(err) }
 //    if (access_token !== undefined) {
 //        console.log(access_token);
 //
 //        getInstagramByMyself(access_token);
 //
 //    }
 // });

class Me extends Component {

  handleLogin(){
    function getInstagramByMyself (access_token) {
       fetch('https://api.instagram.com/v1/users/self/?access_token='+access_token)
           .then((response) => response.json()).then((responseData) => {
               console.log("LOOK HERE!!!!", responseData);
           });
    }

     RNInstagramOAuth('35666c98870840a7a72b628e2f8aa11e', 'http://localhost:3000/auth/instagram/callback', (err, access_token) => {
        if (err) { console.log(err) }
        if (access_token !== undefined) {
            console.log(access_token);

            getInstagramByMyself(access_token);

        }
  })
}


  handleSettingsPress(){
    console.log('this is being pressed')
    this.props.navigation.navigate('Settings');
  };

  handleFeed(){
    this.props.navigation.navigate('Feed');
  };

  handleEliPress() {
    this.props.navigation.navigate('Eli');
  }


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
          title='Eli'
          buttonStyle={{ marginTop: 20 }}
          onPress={(e) => this.handleEliPress(e)}
        />

        <Button
          title="Settings"
          buttonStyle={{ marginTop: 20 }}
          onPress={(e)=>this.handleSettingsPress(e)}
        />


          <Button
            title="instagram"
            buttonStyle={{ marginTop: 20 }}
            onPress={()=>this.handleLogin()}
          />
          <Button
            title="feed"
            buttonStyle={{ marginTop: 20 }}
            onPress={(e)=>this.handleFeed(e)}
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
