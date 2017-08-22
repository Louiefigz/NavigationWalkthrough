import React, { Component } from 'react';
import { ScrollView, TextInput, button, form,} from 'react-native';
import { InputText, InputCountrySelector, InputSwitch } from 'react-native-input-list';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import {Button} from 'react-native-elements';

import DatePicker from 'react-native-datepicker'


// import { Tile, List, ListItem } from 'react-native-elements';

class EditMeProfile extends Component {
  constructor(props){
     super(props)
     this.state = {
       date:"2016-05-15",
       FirstName:'',
       LastName: '',
       phone: '',
       email: '',
       LastName: '',
       location: ''

      }
   }




phoneNumber(e){
  this.setState({
    phone: e.nativeEvent.text
  })
}

changeFirstName(e){
  this.setState({
    FirstName: e
  })
}
changeLastName(e){
  this.setState({
    LastName: e.nativeEvent.text
  })
}
changeEmail(e){
  this.setState({
    email: e.nativeEvent.text
  })
}

chooseLocation(e){
  this.setState({
    location: e.nativeEvent.text
  })
}

username(e){
  this.setState({
    username: e.nativeEvent.text
  })
}

finishForm(e){
  const { name, email, phone, login, dob, location } = this.props.navigation.state.params;
  var setFirstName = this.state.FirstName == "" ? name.first : this.state.FirstName;
  var setLastName = this.state.LastName == "" ? name.last : this.state.LastName;
  var setEmail = this.state.email == "" ? email : this.state.email;
  var setPhone = this.state.phone == "" ? phone : this.state.phone;
  var setUsername = this.state.username == "" ? login.username : this.state.username;
  var setPhone = this.state.phone == "" ? phone : this.state.phone;
  var setLocation = this.state.location = "" ? location.city : this.state.city;
  var bday = dob.split(" ");


  var obj = {
    name: {
      first: setFirstName,
      last: setLastName
    },
    location:{
      city: setLocation
    },
    email: setEmail,
    login:{
      username: setUsername
    },
    dob: bday[0],
    phone: setPhone
  }
  // This should save onto Redux somehow...

}


  render() {

    const { name, email, phone, login, dob, location } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
       <Text style={styles.title}>Inputs</Text>

       <View>

       <InputText ref="firstInput"
                  required type="withLabel"
                  label="First Name"
                  placeholder={name.first}
                  onChangeText={(e)=>this.changeFirstName(e)}
                  value={this.state.FirstName}/>

      <InputText ref="secondInput"
                 required type="withLabel"
                 label="Last Name"
                 placeholder={name.last}
                 onChange={(e)=>this.changeLastName(e)}
                 value={this.state.LastName}
                 />

       <InputText ref="thirdInput"
                  required type="withLabel"
                  label="email"
                  placeholder={email}
                  onChange={(e)=>this.changeEmail(e)}
                  value={this.state.email}
                  />

       <InputText ref="fourthInput" required type="withLabel"
                  keyboardType="numeric"
                  label="phone" placeholder={phone}
                  nChange={(e)=>this.phoneNumber(e)}/>

      <InputText ref="fifthInput" required type="withLabel"
                 label="Username" placeholder={login.username}
                 nChange={(e)=>this.username(e)}/>



      <View style={{backgroundColor: 'white'}}>
        <DatePicker
             style={{width: 200, marginLeft:120}}
             date={this.state.date}
             mode="date"
             placeholder="select date"
             format="YYYY-MM-DD"
             minDate="1950-05-01"
             maxDate="2018-06-01"
             confirmBtnText="Confirm"
             cancelBtnText="Cancel"
             customStyles={{
               dateIcon: {
                 position: 'absolute',
                 left: 2,
                 top: 4,
                 marginLeft: 0
               },
               dateInput: {
                 marginLeft: 60
               }
           // ... You can check the source to find the other keys.
         }}
         onDateChange={(date) => {this.setState({date: date})}}
       />

       <InputText ref="firstInput" required type="withLabel"
                  label="city" placeholder={location.city}
                  nChange={(e)=>this.chooseLocation(e)}/>

        <Button
          title="Done"
          buttonStyle={{ marginTop: 20 }}
          onPress={(e)=>this.finishForm(e)}
        />
       </View>


       </View>

     </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 40
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  action: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: 'blue'
  },
  inputStyles: {
    backgroundColor: 'green'
  }

});


export default EditMeProfile;
