import React, { Component } from 'react';
import { AppRegistry }      from 'react-native';
import Root                 from './app/native/containers/Root';
import configureStore       from './app/store/configureStore.prod.js';

const store = configureStore();

class ReactNativePrometheus extends Component {
  render() {
    return (
      <Root store={store} />
    );
  }
}

AppRegistry.registerComponent('prometheus', () => ReactNativePrometheus);
