import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
// import AppointmentDetails from '../../Components/AppointmentDetails';
import AppointmentCard from '../../Components/AppointmentCard';
import ModalLoader from '../../Components/ModalLoader';
import DrData from '../../assets/data/DrData';
import {getAllDoctors} from '../../Utilities/FirebaseUtils';
import moment from 'moment';
import {duration} from 'moment';
const BookAppointment = props => {
  const [drData, setDrData] = React.useState([]);
  React.useEffect(() => {
    setDrData(props.route.params.data);
  }, []);
  // React.useEffect(() => {
  //   setIsloading(true);
  //   getAllDoctors()
  //     .then(ele => {
  //       let doctorDataa = [];
  //       ele.docs.forEach(data => {
  //         const obj = {
  //           ...data.data(),
  //           id: data.id,
  //         };
  //         doctorDataa.push(obj);
  //       });
  //       setDrData(doctorDataa);
  //       setIsloading(false);
  //     })
  //     .catch(e => {
  //       setIsloading(false);
  //     });
  // }, []);
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.5, backgroundColor: '#B2EA70'}}>
        <View
          style={{flexDirection: 'row', marginTop: 60, marginHorizontal: 10}}>
          <TouchableOpacity style={{justifyContent: 'center'}}>
            <Feather name="chevron-left" size={22} color="#fff" />
          </TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                color: '#fff',
                paddingLeft: 85,
              }}>
              Book Your Appointment
            </Text>
          </View>
        </View>
      </View>
      <View style={{flex: 3, backgroundColor: '#CCD1E4'}}>
        <View>
          <FlatList
            data={drData}
            renderItem={data => {
              const {item} = data;
              return (
                <AppointmentCard item={item} navigation={props.navigation} />
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default BookAppointment;
