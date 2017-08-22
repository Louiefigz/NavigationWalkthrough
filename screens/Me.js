import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import { me } from '../config/data';


class Me extends Component {
//
// constructor(){
//   super();
//   this.state = {
//     edited: false
//   }
// }

  handleSettingsPress(){
    this.props.navigation.navigate('Settings');
  };

  editProfile(){
    // When we navigate, let's also pass the props
    this.props.navigation.navigate('Edit', this.props );
  };
//
// componentWillMount(){
//   debugger
//   this.setState({
//     edited: false
//   })
// }

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

        <Button
        title="Edit"
        buttonStyle={{ marginTop: 20 }}
        onPress={(e)=>this.editProfile(e)}
        />
        </ScrollView>

      )

  }
}
  Me.defaultProps = { ...me };


export default Me;

//
