import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import { me } from '../config/data';

class Me extends Component {

  render() {
    return (
      <ScrollView>
      
      </ScrollView>
    );
  }
}

Me.defaultProps = { ...me };

export default Me;
