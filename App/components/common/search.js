'use steict';

import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

class Search extends Component {
  constructor (props) {
    super (props);
    this.state = {
      text: '',
    };
  }
  render () {
    return (
      <View style={this.props.mainContainerStyle}>
        <Icon
          name={this.props.iconName}
          size={this.props.iconSize}
          style={this.props.iconStyle}
        />

        <TextInput
          placeholder={this.props.placeHolder}
          placeholderTextColor={this.props.placeholderTextColor}
          onChangeText={text => this.setState ({text})}
          numberOfLines={1}
          autoCorrect={this.props.autoCorrect}
          returnKeyType={this.props.returnKeyType}
          style={this.props.searchInputStyle}
        />

      </View>
    );
  }
}

export default Search;
