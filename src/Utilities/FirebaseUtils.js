import Auth, { firebase } from '@react-native-firebase/auth';
import fireStore from '@react-native-firebase/firestore';

export const singUpFirebase = async (email, password) => {
    return await Auth().createUserWithEmailAndPassword(email, password)
}

export const singInFirebase = async (email, password) => {
    return await Auth().signInWithEmailAndPassword(email, password)
}

export const getSingleShowroom = async (id) => {
    return await fireStore().collection("showrooms").doc(id).get()
}

export const getAllShowrooms = async () => {
    return await fireStore().collection("showrooms").get()
}

export const confirmOrder = async (order) => {
    return await fireStore().collection("orders").add(order)
}

export const addShowrooms = async (order) => {
    return await fireStore().collection("showrooms").add(order)
}

export const addUsers = async (userObj) => {
    return await fireStore().collection("users").add(userObj)
}

export const getCurrentUser = async () => {

    return await Auth().currentUser.getIdToken(true)
}

export const getCurrentUserDetail = async (id) => {
    return await fireStore().collection("users").where("id", "==", id).get()
}