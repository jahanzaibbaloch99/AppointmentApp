import Auth, {firebase} from '@react-native-firebase/auth';
import fireStore from '@react-native-firebase/firestore';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const singUpFirebase = async (email, password) => {
  return await Auth().createUserWithEmailAndPassword(email, password);
};

export const singInFirebase = async (email, password) => {
  return await Auth().signInWithEmailAndPassword(email, password);
};

export const getSingleDoctor = async id => {
  return await fireStore().collection('doctors').doc(id).get();
};

export const getAllDoctors = async () => {
  return await fireStore().collection('doctors').get();
};

export const confirmBookings = async appointment => {
  return await fireStore().collection('appointments').add(appointment);
};

export const getAppointments = async () => {
  return await fireStore().collection('appointments').get();
};

export const addDoctors = async doctors => {
  return await fireStore().collection('doctors').add(doctors);
};

export const getSignleAppointment = async id => {
  return await fireStore().collection('appointments').doc(id).get();
};

export const addUsers = async userObj => {
  return await fireStore().collection('users').add(userObj);
};

export const getCurrentUser = async () => {
  return await Auth().currentUser.getIdToken(true);
};

export const deleteAppointMent = async id => {
  return await fireStore().collection('appointments').doc(id).delete();
};

export const getSearchData = async (city, speciality) => {
  if (!city && !speciality) {
    return await fireStore().collection('doctors').get();
  } else if (city && speciality) {
    return await fireStore()
      .collection('doctors')
      .where('city', '==', city)
      .where('specialist', '==', speciality)
      .get();
  } else if (city) {
    return await fireStore()
      .collection('doctors')
      .where('city', '==', city)
      .get();
  } else if (speciality) {
    return await fireStore()
      .collection('doctors')
      .where('specialist', '==', speciality)
      .get();
  }
};

export const getCurrentUserDetail = async id => {
  return await fireStore().collection('users').where('id', '==', id).get();
};

export const GoogleLogin = () => {
  return new Promise((resolve, reject) => {
    GoogleSignin.hasPlayServices()
      .then(hasPlayServices => {
        if (hasPlayServices) {
          GoogleSignin.signIn()
            .then(user => {
              console.log('Google Data', user);
              // GoogleSignin.signOut();
              resolve(user);
            })
            .catch(error => {
              console.log('Google SignIn catch', JSON.stringify(error));
              reject(error);
            });
        }
      })
      .catch(error => {
        console.log('Play Services not available', JSON.stringify(error));
        reject(error);
      });
  });
};

export const singinToGoogle = async idToken => {
  const googleCredential = Auth.GoogleAuthProvider.credential(idToken);
  return Auth().signInWithCredential(googleCredential);
};
