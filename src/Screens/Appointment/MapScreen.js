import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import TextField from '../../Components/TextField';
import AppButton from '../../Components/AppButton';
import * as yup from 'yup';
import {Formik, Field} from 'formik';

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  checkLocationPermission,
  requestLocationService,
} from '../../Utilities/LocationService';
import Geolocation from 'react-native-geolocation-service';
import ModalLoader from '../../Components/ModalLoader';
import {useSelector, useDispatch} from 'react-redux';
import {setMapCoOrinates} from '../../Store/Actions/App';
import {getSearchData} from '../../Utilities/FirebaseUtils';
// import { mapData } from '../../MapData';
import {showMessage} from 'react-native-flash-message';

const signupSchema = yup.object().shape({
  fullname: yup.string().required('Mobile Number Is Required'),
  username: yup.string().required('User Name Is Required'),
});

const getFormikInput = ({
  type,
  name,
  placeholder,
  isSecure,
  iconName,
  isDisbale = true,
}) => {
  return (
    <Field
      isDisbale={isDisbale}
      component={TextField}
      name={name}
      placeholder={placeholder}
      keyboardType={type}
      iconName={iconName}
      isSecure={isSecure}
      placeHolderColor
    />
  );
};

const MapScreen = props => {
  const dispatch = useDispatch();
  const regionState = useSelector(state => state.AppReducer.region);
  const [loading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    getLocationServices();
  }, []);

  const setLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        dispatch(
          setMapCoOrinates({
            ...regionState,
            longitude: position.coords.longitude,
            latitude: position.coords.latitude,
          }),
        );
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      },
    );
  };
  const getLocationServices = () => {
    checkLocationPermission().then(ele => {
      if (ele.isGranted) {
        // this.setState({
        //   locationPromptBlocked: false,
        // });
        setLocation();
      } else {
        requestLocationService().then(ele => {
          if (ele.reason == 'blocked') {
            // this.setState({
            //   locationPromptBlocked: true,
            // });
          } else if (ele.reason == 'granted') {
            // this.setState({
            //   locationPromptBlocked: false,
            // });
            setLocation();
          } else {
            getLocationServices();
          }
        });
      }
    });
  };

  const handleSearchSubmit = (city, speciality) => {
    setIsLoading(true);
    getSearchData(city, speciality)
      .then(ele => {
        if (ele.docs.length < 1) {
          setIsLoading(false);
          showMessage({
            type: 'info',
            description: 'No Data Found Against Your Search Query',
            message: 'Info',
            duration: 4000,
          });
        } else {
          let doctorDataa = [];
          ele.docs.forEach(data => {
            const obj = {
              ...data.data(),
              id: data.id,
            };
            doctorDataa.push(obj);
          });
          props.navigation.navigate('BookAppointment', {
            data: doctorDataa,
          });
          setIsLoading(false);
        }
      })
      .catch(e => {
        setIsLoading(false);
        showMessage({
          type: 'danger',
          description: e?.message,
          message: 'error',
        });
      });
  };

  return (
    <View style={styles.container}>
      {loading && <ModalLoader />}

      <MapView region={regionState} style={styles.map}>
        <Marker
          draggable
          onDragEnd={e => {
            dispatch(
              setMapCoOrinates({
                ...regionState,
                longitude: e.nativeEvent.coordinate.longitude,
                latitude: e.nativeEvent.coordinate.latitude,
              }),
            );
          }}
          coordinate={regionState}
        />
      </MapView>

      <View
        style={{
          width: '100%',
          position: 'absolute',
          zIndex: 10,
        }}>
        <View style={{flex: 1, paddingHorizontal: 15}}>
          <Formik
            // validationSchema={ValidationSchema}
            initialValues={{
              city: '',
              speciality: '',
            }}
            onSubmit={val => {
              handleSearchSubmit(val.city, val.speciality);
            }}>
            {({handleSubmit, values}) => {
              return (
                <View style={{flex: 1, justifyContent: 'space-between'}}>
                  <View style={{marginTop: 30}}>
                    <View style={{marginVertical: 10}}>
                      {getFormikInput({
                        name: 'city',
                        placeholder: 'Enter City',
                      })}
                    </View>
                    <View style={{marginVertical: 10}}>
                      {getFormikInput({
                        name: 'speciality',
                        placeholder: 'Enter Speciality',
                      })}
                    </View>
                  </View>

                  <View style={{marginTop: 10}}>
                    <AppButton onPress={handleSubmit}>Search</AppButton>
                  </View>
                </View>
              );
            }}
          </Formik>
        </View>
      </View>
    </View>
  );
};

export default MapScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
