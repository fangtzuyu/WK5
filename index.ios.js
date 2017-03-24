import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import Page from './page1';
// import Page from './page2';
import Page from './page3';

export default class Hw5 extends Component {
  render() {
    return (
      <Page />
    );
  }
}


AppRegistry.registerComponent('Hw5', () => Hw5);
