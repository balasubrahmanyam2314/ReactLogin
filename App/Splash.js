'use strict';

import React, {Component} from 'react';
import {View, Text, ScrollView, SectionList} from 'react-native';

import Search from './components/common/search';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchResultList from './SearchResultList';

export default class Splash extends Component {
  constructor (props) {
    super (props);
    this.state = {
      apiData: [],
      popularSearchData: [],
    };

    // Set dummy data for result list
    this.state.apiData = [
      {
        area: 'Madhapur',
        city: 'Hyderabad',
        state: 'Telangana',
        country: 'India',
      },
      {
        area: 'Gachibowli',
        city: 'Hyderabad',
        state: 'Telangana',
        country: 'India',
      },
      {
        area: 'Ameerpet',
        city: 'Hyderabad',
        state: 'Telangana',
        country: 'India',
      },
    ];
    this.state.popularSearchData = [
      {
        area: 'Somajiguda',
        city: 'Hyderabad',
        state: 'Telangana',
        country: 'India',
      },
      {
        area: 'Hi-tech city',
        city: 'Hyderabad',
        state: 'Telangana',
        country: 'India',
      },
      {
        area: 'LB Nagar',
        city: 'Hyderabad',
        state: 'Telangana',
        country: 'India',
      },
      {
        area: 'Malakpet',
        city: 'Hyderabad',
        state: 'Telangana',
        country: 'India',
      },
      {
        area: 'AS Rao NAgar',
        city: 'Hyderabad',
        state: 'Telangana',
        country: 'India',
      },
    ];
  }

  _renderItem = ({item, index, section}) => (
    <SearchResultList key={index} data={item} onPressItem={this._onPressItem} />
  );

  _keyExtractor = (item, index) => index.toString ();

  _onPressItem = item => {
    console.log (item);
  };

  _renderSectionHeader = ({section}) => (
    <Text
      style={{
        fontSize: 20,
        padding: 5,
        color: '#939598',
      }}
    >
      {section.title}
    </Text>
  );

  _renderSeparator = () => {
    return (
      <View style={{height: 1, width: '100%', backgroundColor: '#CED0CE'}} />
    );
  };

  render () {
    return (
      <View style={{flex: 1, padding: 12, backgroundColor: '#fff'}}>
        <Search
          mainContainerStyle={{
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: '#fff',
            borderRadius: 6,
            borderWidth: 1,
            borderColor: '#939598',
            height: 60,
          }}
          iconName="search"
          iconSize={30}
          iconStyle={{
            color: '#939598',
            marginHorizontal: 12,
            alignSelf: 'center',
          }}
          autoCorrect={true}
          placeHolder="Enter Here"
          placeHolderTextColor="#939598"
          returnKeyType="search"
          searchInputStyle={{
            flex: 1,
            height: '100%',
            backgroundColor: '#fff',
            fontSize: 20,
            right: 0,
            color: '#000',
            paddingHorizontal: 10,
          }}
        />

        <View style={{marginTop: 24}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="my-location" size={30} style={{color: '#939598'}} />

            <Text style={{color: '#007AFF', fontSize: 18, marginLeft: 12}}>
              Current Location
            </Text>
          </View>
          <View
            style={{backgroundColor: '#939598', height: 1, marginTop: 12}}
          />
        </View>

        <ScrollView
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          style={{backgroundColor: '#ffffff', width: '100%', height: '100%'}}
        >
          <SectionList
            style={{marginTop: 24}}
            sections={[
              {title: 'Search Results', data: this.state.apiData},
              {title: 'Popular Locations', data: this.state.popularSearchData},
            ]}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            renderSectionHeader={this._renderSectionHeader}
            ItemSeparatorComponent={this._renderSeparator}
          />
        </ScrollView>
      </View>
    );
  }
}
