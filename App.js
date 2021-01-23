import React from 'react';
import HomeScreen from './app/screens/home-screen';
import {Provider} from 'react-redux';
import {store, persistor} from './app/redux/store';
import {PersistGate} from 'redux-persist/es/integration/react';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HomeScreen />
      </PersistGate>
    </Provider>
  );
}
