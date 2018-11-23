/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import TypeSelect from './App/TypeSelect';
import Splash from './App/Splash';
import SearchResultList from './App/SearchResultList';

export default class App extends Component {
  render () {
    return <Splash />;
  }
}
