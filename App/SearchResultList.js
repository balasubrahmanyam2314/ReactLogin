'use steict';

import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

class SearchResultList extends Component {
  constructor (props) {
    super (props);
    this.state = {
      item: this.props.data,
    };
  }

  _onPress = () => {
    this.props.onPressItem (this.state.item);
  };

  render () {
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View
          style={{
            flexDirection: 'column',
            backgroundColor: '#fff',
            padding: 12,
          }}
        >

          <Text style={{color: '#8492A8', fontSize: 20, fontWeight: '400'}}>
            {this.state.item.area}
          </Text>

          <Text style={{color: '#939598', fontSize: 16}}>
            {this.state.item.city}
            ,
            {' '}
            {this.state.item.state}
            ,
            {this.state.item.country}
          </Text>

        </View>
      </TouchableOpacity>
    );
  }
}

export default SearchResultList;
