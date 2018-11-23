'use strict';
import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground,
  Animated,
  Easing,
} from 'react-native';

import TypeSelectNewButton from './components/common/type-select-new-btn';

const window = Dimensions.get ('window');
const searchBGImg = require ('../assets/search-bg-kit.png');
const sanarLogoSmall = require ('../assets/sanar-logo-white.png');
const sanarLogoTxt = require ('../assets/title-logo-white.png');

export default class TypeSelect extends Component {
  constructor (props) {
    super (props);
    this.state = {
      visible: false,
      x: new Animated.Value (-100),
    };
  }

  slide = () => {
    Animated.spring (this.state.x, {
      toValue: 0,
      easing: Easing.easeOutBack,
    }).start ();
    this.setState ({
      visible: true,
    });
  };

  componentDidMount () {
    this.slide ();
  }
  render () {
    return (
      <View style={{flex: 1}}>
        <ImageBackground source={searchBGImg} style={styles.imgBG}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 72,
                height: 150,
                width: 150,
                borderRadius: 150 / 2,
                borderWidth: 12,
                borderColor: '#B2D9FF',
                backgroundColor: '#0081FF',
              }}
            >
              <Image
                style={{
                  height: 35,
                  width: 35,
                  marginBottom: 12,
                  resizeMode: 'stretch',
                }}
                source={sanarLogoSmall}
              />
              <Image
                style={{height: 20, width: '70%', resizeMode: 'center'}}
                source={sanarLogoTxt}
              />
            </View>
            <View>
              <Animated.View
                style={[
                  styles.slideView,
                  {transform: [{translateX: this.state.x}]},
                  {alignItems: 'center'},
                ]}
              >
                <TypeSelectNewButton
                  mainContainer={styles.mainContainer}
                  iconName="hospital-building"
                  iconSize={24}
                  iconStyle={styles.iconStyle}
                  textParentStyle={styles.textParentStyle}
                  textValue="Book a hospital appointment"
                  textStyle={styles.textStyle}
                />

                <View style={{marginTop: 12}}>
                  <TypeSelectNewButton
                    mainContainer={{
                      flexDirection: 'row',
                      height: 70,
                      backgroundColor: '#fff',
                      width: window.width - 60,
                      borderRadius: 6,
                      borderWidth: 1,
                      borderColor: '#0081FF',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    iconName="home-plus"
                    iconSize={30}
                    iconStyle={{color: '#0081FF', marginLeft: 12}}
                    textParentStyle={{flex: 1}}
                    textValue="Book a Home visit"
                    textStyle={{
                      color: '#000',
                      fontSize: 20,
                      marginLeft: -42,
                      textAlign: 'center',
                    }}
                  />
                </View>
              </Animated.View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  imgBG: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  mainContainer: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#0081FF',
    width: window.width - 60,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#0081FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    color: '#fff',
    marginLeft: 12,
  },
  textParentStyle: {
    flex: 1,
  },
  textStyle: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    marginLeft: -12,
  },
});
