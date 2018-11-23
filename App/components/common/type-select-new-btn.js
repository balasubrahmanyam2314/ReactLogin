'use strict';

import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class TypeSelectNewButton extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  gotoSearch = () => {
    console.log ('button pressed');
  };

  render () {
    return (
      <TouchableOpacity onPress={() => this.gotoSearch ()}>
        <View style={this.props.mainContainer}>

          <Icon
            name={this.props.iconName}
            size={this.props.iconSize}
            style={this.props.iconStyle}
          />

          <View style={this.props.textParentStyle}>
            <Text style={this.props.textStyle}>
              {this.props.textValue}
            </Text>
          </View>

        </View>
      </TouchableOpacity>
    );
  }
}

export default TypeSelectNewButton;
