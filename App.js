import React from 'react';
import {Text, View} from 'react-native';
import Navigation from './src/Navigation/NavigationStack';
import FlashMessage from 'react-native-flash-message';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'; // persist Gate Context Component to Connect the App with React Persistance
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {store, persistor} from './src/Store/Index'; // persistor where our Persist Data Configured
const App = () => {
  React.useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email', 'profile'], // [Android] what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '348789248154-bi2atg1dbo36u1q5jv3nc2km72kdib73.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      hostedDomain: '', // specifies a hosted domain restriction
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      accountName: '', // [Android] specifies an account name on the device that should be used
      iosClientId: '', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
      openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
      profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
    });
  }, []);
  return (
    <View style={{flex: 1}}>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
          <FlashMessage position="top" />
        </PersistGate>
      </ReduxProvider>
    </View>
  );
};

export default App;
