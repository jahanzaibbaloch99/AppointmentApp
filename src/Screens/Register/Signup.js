import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TextField from '../../Components/TextField';
import AppButton from '../../Components/AppButton';
import {
  singInFirebase,
  getCurrentUser,
  getCurrentUserDetail,
  singUpFirebase,
  GoogleLogin,
  singinToGoogle,
  addUsers,
} from '../../Utilities/FirebaseUtils';
import {Formik, Field} from 'formik';
import {setUserData} from '../../Store/Actions/Account';
import {useDispatch} from 'react-redux';
import {showMessage} from 'react-native-flash-message';

import * as yup from 'yup';
import ModalLoader from '../../Components/ModalLoader';
const signupSchema = yup.object().shape({
  fullname: yup.string().required('Mobile Number Is Required'),
  username: yup.string().required('User Name Is Required'),
  password: yup
    .string()
    .required('New password is required')
    .min(7, ({min}) => `Password must be atleast ${min} characters long `),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
  email: yup
    .string()
    .required('Email is Required')
    .email('Please Enter a Valid Email')
    .trim(),
});

const loginSchema = yup.object().shape({
  password: yup
    .string()
    .required('New password is required')
    .min(7, ({min}) => `Password must be atleast ${min} characters long `),
  email: yup
    .string()
    .required('Email is Required')
    .email('Please Enter a Valid Email')
    .trim(),
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
const Register = ({singupConfirm}) => {
  return (
    <View>
      <Formik
        // validationSchema={ValidationSchema}
        initialValues={{
          fullname: '',
          username: '',
          password: '',
          email: '',
          confirmpassword: '',
        }}
        onSubmit={val => {
          singupConfirm(val.email, val.password, val.username, val.fullname);
        }}
        validationSchema={signupSchema}>
        {({handleSubmit, values}) => {
          return (
            <View>
              <View>
                {getFormikInput({
                  name: 'fullname',
                  placeholder: 'Full Name',
                  iconName: 'call',
                })}
                {/* <TextField placeHolder="Full Name" /> */}
              </View>
              <View>
                {getFormikInput({
                  name: 'username',
                  placeholder: 'User Name',
                  iconName: 'call',
                })}
                {/* <TextField placeHolder="User Name" /> */}
              </View>
              <View>
                {getFormikInput({
                  name: 'email',
                  placeholder: 'Email',
                  iconName: 'call',
                })}
                {/* <TextField placeHolder="Email" /> */}
              </View>
              <View>
                {getFormikInput({
                  name: 'password',
                  placeholder: 'Password',
                  isSecure: true,
                })}
                {/* <TextField placeHolder="Password" passwordText={true} /> */}
              </View>
              <View>
                {getFormikInput({
                  name: 'confirmpassword',
                  placeholder: 'Confirm Password',
                  isSecure: true,
                })}
                {/* <TextField placeHolder="Confirm Password" passwordText={true} /> */}
              </View>
              <View style={{marginVertical: 10}}>
                <AppButton onPress={handleSubmit}>Sign Up</AppButton>
              </View>
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

const Login = ({singInConfim}) => {
  return (
    <View>
      <Formik
        // validationSchema={ValidationSchema}
        validationSchema={loginSchema}
        initialValues={{
          password: '',
          email: '',
        }}
        onSubmit={val => {
          singInConfim(val.email, val.password);
        }}>
        {({handleSubmit, values}) => {
          return (
            <View>
              <View>
                {getFormikInput({
                  name: 'email',
                  placeholder: 'Email',
                  iconName: 'call',
                })}
                {/* <TextField placeHolder="Email" /> */}
              </View>
              <View>
                {getFormikInput({
                  name: 'password',
                  placeholder: 'Password',
                  isSecure: true,
                })}
                {/* <TextField placeHolder="Password" passwordText={true} /> */}
              </View>
              <View style={{marginVertical: 10}}>
                <AppButton onPress={handleSubmit}>Sign In </AppButton>
              </View>
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

const Signup = props => {
  const [loading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const userGet = id => {
    getCurrentUser()
      .then(ele => {
        return getCurrentUserDetail(id);
      })
      .then(ele => {
        setIsLoading(false);
        ele.docs.forEach(newElel => {
          // console.log(newElel.data());
          const user = {
            ...newElel.data(),
          };
          // console.loq('ELEEEE', user);

          dispatch(setUserData(user));
        });
        props.navigation.navigate('BottomStack');
      });
  };

  const singInConfim = (email, password) => {
    setIsLoading(true);
    singInFirebase(email, password)
      .then(ele => {
        userGet(ele.user.uid);
      })
      .catch(e => {
        showMessage({
          message: 'Error',
          description: e.message,
          type: 'danger',
        });
        setIsLoading(false);
      });
  };

  const googleSiginMethod = () => {
    let googleuser = {};
    GoogleLogin()
      .then(user => {
        setIsLoading(true);
        googleuser = user;
        return singinToGoogle(user.idToken);
      })
      .then(() => {
        const obj = {
          id: googleuser.user.id,
          email: googleuser.user.email,
          userName: googleuser.user.givenName,
          mobileNumber: '03144444444',
        };
        return addUsers(obj);
      })
      .then(e => {
        setIsLoading(false);
        userGet(googleuser.user.id);
      })
      .catch(error => {
        console.log('error', error);
      });
  };
  const singupConfirm = (email, password, userName, fullname) => {
    setIsLoading(true);
    singUpFirebase(email, password)
      .then(ele => {
        const obj = {
          id: ele.user.uid,
          email: email,
          userName: userName,
          fullname: fullname,
        };
        addUsers(obj);
        setIsLoading(false);
        setIsActive(false);
        showMessage({
          message: 'Success',
          description: 'Account Created Successfully Please Signin',
          type: 'success',
        });
      })
      .catch(e => {
        showMessage({
          message: 'Error',
          description: e.message,
          type: 'danger',
        });
        setIsLoading(false);
      });
  };
  const [isActive, setIsActive] = useState(true);
  return (
    <View style={{flex: 1, backgroundColor: '#CCD1E4'}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        {loading && <ModalLoader />}
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
            <View>
              {isActive ? (
                <Register singupConfirm={singupConfirm} />
              ) : (
                <Login singInConfim={singInConfim} />
              )}
            </View>
            <View style={{marginVertical: 10}}>
              <AppButton onPress={googleSiginMethod}>
                Sign In Via Google
              </AppButton>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Signup;
