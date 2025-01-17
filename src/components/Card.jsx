import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RightArrow from './icons/RightArrow';

const Card = () => {
  return (
    <View>
      <View style={styles.heading}>
        <Text>Card</Text>
        <RightArrow />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
    heading:{
        flexDirection: 'row'
    }
});
