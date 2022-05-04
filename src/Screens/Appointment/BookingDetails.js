import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialIcons';
import {getSignleAppointment} from '../../Utilities/FirebaseUtils';
import ModalLoader from '../../Components/ModalLoader';
const BookingDetail = props => {
  const [bookingDetails, setBookingDetails] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    getappointment(props?.route?.params?.id);
  }, []);

  const getappointment = id => {
    console.log(id, 'ID');
    setIsLoading(true);
    getSignleAppointment(id).then(ele => {
      setIsLoading(false);
      setBookingDetails(ele.data());
    });
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#B2EA70',
          margin: 5,
          borderRadius: 10,
        }}>
        {isLoading && <ModalLoader />}
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}
          style={{marginHorizontal: 20, marginVertical: 20}}>
          <Ionicons name="arrow-back" size={40} color="#000" />
        </TouchableOpacity>
        <View>
          <Ionicons
            name="ios-checkmark-circle"
            size={200}
            color="green"
            style={{textAlign: 'center'}}
          />
        </View>
        <View>
          <Text style={{textAlign: 'center', fontSize: 24, fontWeight: '700'}}>
            Your Appointment Booked
          </Text>
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: '#fff', paddingVertical: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <View>
            <Image
              style={{width: 100, height: 100}}
              source={{uri: bookingDetails?.image}}
            />
          </View>
          <View>
            <Text style={{color: '#000', fontSize: 22, fontWeight: '600'}}>
              {bookingDetails?.drName}
            </Text>
            <Text style={{color: '#000', fontSize: 18}}>
              {bookingDetails?.speciality}
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Material name="edit" size={30} color="#000" />
            <Text style={{color: 'black', fontSize: 16}}>Edit</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Material name="delete" size={30} color="#000" />
            <Text style={{color: 'black', fontSize: 16}}>Delete</Text>
          </View>
        </View>
        <View
          style={{backgroundColor: '#DDDDDD', padding: 15, marginVertical: 30}}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="calendar-outline" size={50} color="green" />
              <Text style={{color: '#000', marginLeft: 10, fontSize: 16}}>
                Time & Date
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{color: '#000', fontSize: 16}}>04-March-2022</Text>
              <Text style={{color: '#000', fontSize: 20, fontWeight: '700'}}>
                {bookingDetails?.time}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text
            style={{
              color: '#000',
              textAlign: 'center',
              fontSize: 20,
              fontWeight: '700',
            }}>
            {bookingDetails?.city}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BookingDetail;
