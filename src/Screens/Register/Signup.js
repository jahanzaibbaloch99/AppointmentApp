import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TextField from '../../Components/TextField';
import AppButton from '../../Components/AppButton';

const Register = () => {
  return (
    <View>
      <View>
        <TextField placeHolder="Full Name" />
      </View>
      <View>
        <TextField placeHolder="User Name" />
      </View>
      <View>
        <TextField placeHolder="Email" />
      </View>
      <View>
        <TextField placeHolder="Password" passwordText={true} />
      </View>
      <View>
        <TextField placeHolder="Confirm Password" passwordText={true} />
      </View>
      <View>
        <AppButton name="Sign up" />
      </View>
    </View>
  );
};

const Login = () => {
  return (
    <View>
      <View>
        <TextField placeHolder="Email" />
      </View>
      <View>
        <TextField placeHolder="Password" passwordText={true} />
      </View>
      <View>
        <AppButton name="Sign In" />
      </View>
    </View>
  );
};

const Signup = () => {
  const [isActive, setIsActive] = useState(true);
  return (
    <View style={{flex: 1, backgroundColor: '#CCD1E4'}}>
      <View style={{flex: 1}}>
        <View style={{alignItems: 'center', marginTop: 50}}>
          <Ionicons name="md-person-add" size={100} color="#000" />
        </View>
      </View>
      <View style={{flex: 2.5}}>
        <View
          style={{
            backgroundColor: '#fff',
            marginHorizontal: 10,
            paddingBottom: 40,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginBottom: 50,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: isActive === true ? '#fff' : '#DDDDDD',
                paddingVertical: 20,
                paddingHorizontal: 66,
              }}
              onPress={() => {
                setIsActive(true);
              }}>
              <Text
                style={{
                  fontWeight: '700',
                  color: '#000',
                }}>
                SIGN UP
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: isActive === false ? '#fff' : '#DDDDDD',
                paddingVertical: 20,
                paddingHorizontal: 66,
              }}
              onPress={() => {
                setIsActive(false);
              }}>
              <Text style={{fontWeight: '700', color: '#000'}}>LOG IN</Text>
            </TouchableOpacity>
          </View>
          <View>{isActive ? <Register /> : <Login />}</View>
        </View>
      </View>
    </View>
  );
};

export default Signup;
