import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialIcons';
import {getSignleAppointment} from '../../Utilities/FirebaseUtils';
import ModalLoader from '../../Components/ModalLoader';
import moment from 'moment';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {deleteAppointMent} from '../../Utilities/FirebaseUtils';
import {showMessage} from 'react-native-flash-message';
import {deleteAppointmentStore} from '../../Store/Actions/App';
import {useDispatch} from 'react-redux';

const BookingDetail = props => {
  const [bookingDetails, setBookingDetails] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    getappointment(props?.route?.params?.id);
  }, []);
  const dispatch = useDispatch();
  const getappointment = id => {
    setIsLoading(true);
    getSignleAppointment(id).then(ele => {
      setIsLoading(false);
      setBookingDetails({...ele.data(), id: ele.id});
    });
  };

  const onDelete = id => {
    setIsLoading(true);
    deleteAppointMent(id)
      .then(ele => {
        setIsLoading(false);
        dispatch(deleteAppointmentStore(id));
        props.navigation.reset({
          index: 0,
          routes: [{name: 'BottomStack'}],
        });
      })
      .catch(e => {
        setIsLoading(false);
        showMessage({
          message: 'Error',
          description:
            'Something went wrong while Booking Appointment Please Try again Later',
          type: 'danger',
        });
      });
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flexGrow: 1}}>
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
              <Text
                style={{textAlign: 'center', fontSize: 24, fontWeight: '700'}}>
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
              <View style={{width: 100, height: 100}}>
                <Image
                  style={{
                    flex: 1,
                    height: undefined,
                    width: undefined,
                    resizeMode: 'center',
                  }}
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

              <TouchableOpacity
                onPress={() => {
                  Alert.alert('Logout?', 'Are you sure you want to Logout?', [
                    {
                      text: 'Cancel',
                      onPress: () => null,
                      style: 'cancel',
                    },
                    {
                      text: 'Delete',
                      onPress: () => onDelete(bookingDetails.id),
                    },
                  ]);
                }}
                style={{alignItems: 'center'}}>
                <Material name="delete" size={30} color="#000" />
                <Text style={{color: 'black', fontSize: 16}}>Delete</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                backgroundColor: '#DDDDDD',
                padding: 15,
                marginVertical: 30,
              }}>
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
                  <Text style={{color: '#000', fontSize: 16}}>
                    {moment(bookingDetails?.date).format('DD/MM/YYYY')}
                  </Text>
                  <Text
                    style={{color: '#000', fontSize: 20, fontWeight: '700'}}>
                    {bookingDetails?.time}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 300,
                width: '100%',
              }}>
              {bookingDetails.location && (
                <MapView
                  region={{
                    latitude: Number(bookingDetails?.location.ltd),
                    longitude: Number(bookingDetails?.location.lng),
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                  style={StyleSheet.absoluteFillObject}>
                  <Marker
                    coordinate={{
                      latitude: Number(bookingDetails?.location.ltd),
                      longitude: Number(bookingDetails?.location.lng),
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421,
                    }}
                  />
                </MapView>
              )}
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
      </ScrollView>
    </View>
  );
};

export default BookingDetail;
