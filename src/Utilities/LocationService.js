import { Permission, PERMISSIONS, RESULTS, request, check } from "react-native-permissions";
import { Platform, Linking } from "react-native"
import Geolocation from 'react-native-geolocation-service';

export const requestLocationService = () => {
    return new Promise((res, rej) => {
        request(Platform.OS == "android" ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION : PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then((result) => {
            if (result == RESULTS.BLOCKED || result == RESULTS.DENIED || result == RESULTS.LIMITED) {
                res({
                    isGranted: false,
                    reason: result
                })
            } else {
                res({
                    isGranted: true,
                    reason: result
                })
            }
        }).catch((e) => {
            res({
                isGranted: true,
                reason: e
            })
        })
    })

}

export const checkLocationPermission = () => {
    return new Promise((res, rej) => {
        check(Platform.OS == "android" ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION : PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
            .then((result) => {
                switch (result) {
                    case RESULTS.UNAVAILABLE:
                        res({
                            isGranted: false,
                            reason: result
                        })
                        break;
                    case RESULTS.DENIED:
                        res({
                            isGranted: false,
                            reason: result
                        })
                        break;
                    case RESULTS.LIMITED:
                        res({
                            isGranted: false,
                            reason: result
                        })
                        break;
                    case RESULTS.GRANTED:
                        res({
                            isGranted: true,
                            reason: result
                        })
                        break;
                    case RESULTS.BLOCKED:
                        res({
                            isGranted: false,
                            reason: result
                        })
                        break;
                }
            })
            .catch((error) => {
                console.log(error, "error")
                // …
            });
    })


}


export const getLatLong = () => {
    return new Promise((res, rej) => {
        Geolocation.getCurrentPosition(
            (position) => {
                res(position)
            },
            (error) => {
                // See error code charts below.
                rej(error)
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: false, timeout: 15000, maximumAge: 10000 }
        );
    })
}