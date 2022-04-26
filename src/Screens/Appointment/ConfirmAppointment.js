import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import DateDetails from '../../Components/DateDetails';
import TimeDetails from '../../Components/TimeDetails';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppButton from '../../Components/AppButton';
import StarRating from 'react-native-star-rating';

const ConfirmAppointment = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={{flexGrow: 1, backgroundColor: '#fff'}}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#49FF00',
            margin: 10,
            paddingBottom: 10,
            borderRadius: 20,
          }}>
          <TouchableOpacity style={{marginHorizontal: 10, marginVertical: 10}}>
            <Ionicons name="arrow-back" size={40} color="#fff" />
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <View style={{marginHorizontal: 10}}>
              <Image
                style={{height: 120, width: 120}}
                source={require('../../assets/images/Dr1.jpg')}
              />
            </View>
            <View style={{marginTop: 20}}>
              <View>
                <Text style={{fontSize: 22, color: '#fff'}}>
                  Dr Zakaria Younus
                </Text>
              </View>
              <View style={{marginHorizontal: 10}}>
                <Text style={{color: 'black', fontSize: 18}}>Cardiologist</Text>
              </View>
              <View style={{marginHorizontal: 10, marginVertical: 10}}>
                <Ionicons name="star-sharp" size={40} color="yellow" />
              </View>
            </View>
          </View>
          {/* <View>
        <StarRating
        iconSet={'Ionicons'}
        fullStar={'star-sharp'}
        fullStarColor={'yellow'}
        />
        </View> */}
        </View>
        <View style={{flex: 2}}>
          <View style={{marginHorizontal: 30}}>
            <Text style={{color: 'black', fontSize: 22}}>March 2022</Text>
          </View>
          <View>
            <DateDetails />
          </View>

          <View>
            <TimeDetails />
          </View>
          <View style={{marginBottom: 10}}>
            <AppButton name="Confirm Appointment" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ConfirmAppointment;
