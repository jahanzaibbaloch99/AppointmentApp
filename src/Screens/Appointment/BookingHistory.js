import React from 'react';
import {View, TouchableOpacity, Text, FlatList} from 'react-native';
import BookingHistoryCard from '../../Components/BookingHistoryCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import {getAppointments} from '../../Utilities/FirebaseUtils';
import {useSelector, useDispatch} from 'react-redux';
import {setAppointmentFirebase} from '../../Store/Actions/App';
const BookingHistory = props => {
  const dispatch = useDispatch();
  const state = useSelector(ele => ele.AppReducer.appointments);
  const isDeleted = useSelector(ele => ele.AppReducer.isDeleted);
  const [appointments, setAppointments] = React.useState([]);
  const [isLoading, setIsloading] = React.useState(false);
  React.useEffect(() => {
    if (state?.length < 1) {
      getAllappointments();
    }
  }, []);

  const getAllappointments = () => {
    setIsloading(true);
    let myApp = [];
    getAppointments().then(ele => {
      ele.docs.forEach(ele => {
        const appobj = {
          ...ele.data(),
          id: ele.id,
        };
        myApp.push(appobj);
      });
      dispatch(setAppointmentFirebase(myApp));
      setIsloading(false);
    });
  };

  return (
    <View style={{flex: 1}}>
      <View>
        <View style={{backgroundColor: '#B2EA70', flexDirection: 'row'}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              flex: 1,
              paddingVertical: 20,
            }}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>
              Your Booking History
            </Text>
          </View>
        </View>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={state}
          extraData={isDeleted}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('BookingDetails', {id: item.id});
                }}>
                <BookingHistoryCard
                  name={item.drName}
                  address={`${item.speciality} , ${item.city}`}
                  time={`Appointment Time : ${item.time}`}
                  image={item.image}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default BookingHistory;
