import React, { Component } from 'react';
import Navigator from './src/config/navigation';
import { Provider } from 'react-redux';
import { View, StatusBar } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './src/reducers/index';
import config from "./src/config";
import logger from 'redux-logger';
import * as firebase from 'firebase';
import 'firebase/firestore';

// export default class App extends React.Component {

//   constructor(props)
//   {
//     super(props);


// <script src="https://www.gstatic.com/firebasejs/5.11.1/firebase.js"></script>
// <script>
//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyAFxyOmkrqd68bDk36mv1mOTs5rf1Zy1ec",
//     authDomain: "cidm4385final-32342.firebaseapp.com",
//     databaseURL: "https://cidm4385final-32342.firebaseio.com",
//     projectId: "cidm4385final-32342",
//     storageBucket: "cidm4385final-32342.appspot.com",
//     messagingSenderId: "32185531235"


//     var config = {
//       //expo allows for secrets and keys access: https://docs.expo.io/versions/latest/workflow/configuration/
//       apiKey: Expo.Constants.manifest.extra.firebaseAPIKey,
//       authDomain: "cidm4385-spring2019.firebaseapp.com",
//       databaseURL: "https://cidm4385-spring2019.firebaseio.com",
//       projectId: "cidm4385-spring2019",
//       storageBucket: "cidm4385-spring2019.appspot.com",
//       messagingSenderId: "902346719730"
//     };
//   };
//   firebase.initializeApp(config);
// </script>
  

// if (!firebase.apps.length) {
//   firebase.initializeApp(config);
// }

// this.state = {
//   orders: [],
//   db: firebase.firestore()
// }

// this.HandleDatabaseRead = this.HandleDatabaseRead.bind(this);
// this.GetAllOrders = this.GetAllOrders.bind(this);

// }



const store = createStore(reducers, applyMiddleware(thunkMiddleware, logger));

export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <StatusBar barStyle={config.BAR_STYLE}/>
          <Navigator/>
        </View>
      </Provider>
    );
  }
}