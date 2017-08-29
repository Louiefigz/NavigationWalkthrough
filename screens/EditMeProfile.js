import React, { Component } from 'react';
import { ScrollView, TextInput, button, form,} from 'react-native';
import { InputText, InputCountrySelector, InputSwitch } from 'react-native-input-list';


//add Image below
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image } from 'react-native';


// changes
import {Button, Tile} from 'react-native-elements';
import DatePicker from 'react-native-datepicker';


var ImagePicker = require('react-native-image-picker');



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
       username: '',
       city: '',
       avatarSource: null

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

chooseCity(e){
  this.setState({
    city: e.nativeEvent.text
  })
}

username(e){
  this.setState({
    username: e.nativeEvent.text
  })
}


selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };
    var _this = this;

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response)


      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };
        this.setState({
          avatarSource: source
        });

      }
    });
  }


finishForm(e){
  const { name, email, phone, login, dob, location } = this.props.navigation.state.params;
  var setFirstName = this.state.FirstName == "" ? name.first : this.state.FirstName;
  var setLastName = this.state.LastName == "" ? name.last : this.state.LastName;
  var setEmail = this.state.email == "" ? email : this.state.email;
  var setPhone = this.state.phone == "" ? phone : this.state.phone;
  var setUsername = this.state.username == "" ? login.username : this.state.username;
  var setPhone = this.state.phone == "" ? phone : this.state.phone;
  var setCity = this.state.city == "" ? location.city : this.state.city
  var bday = dob.split(" ");
  var setBday = this.state.date === dob[0] ? dob : this.state.date

  var obj = {
    name: {
      first: setFirstName,
      last: setLastName
    },
    location:{
      city: setCity
    },
    email: setEmail,
    login:{
      username: setUsername
    },
    dob: setBday,
    phone: setPhone
  }
  // This should save onto Redux somehow...

}




  render() {

    const { picture, name, email, phone, login, dob, location } = this.props.navigation.state.params;
    return (
      <ScrollView>

      <View style={styles.container}>
      <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
        <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
          { this.state.avatarSource === null ?  <Image style={styles.avatar} source={{uri: picture.large}} /> :
            <Image style={styles.avatar} source={this.state.avatarSource} />
          }
          </View>
      </TouchableOpacity>

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
                  onChange={(e)=>this.phoneNumber(e)}/>

      <InputText ref="fifthInput" required type="withLabel"
                 label="Username" placeholder={login.username}
                 onChange={(e)=>this.username(e)}/>

     <InputText ref="sixthInput" required type="withLabel"
                 label="City" placeholder={location.city}
                onChange={(e)=>this.chooseCity(e)}
                />




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
       </View>


        <Button
          title="Done"
          buttonStyle={{ marginTop: 20 }}
          onPress={(e)=>this.finishForm(e)}
        />



     </View>
     </ScrollView>
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
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 400,
    height: 275
  }

});


export default EditMeProfile;
