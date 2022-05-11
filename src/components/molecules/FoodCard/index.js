import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {DummyFood, ILStarOn} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';

const FoodCard = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyFood} style={styles.foodImage} />
      <Text style={styles.title}>Cheery</Text>
      <View style={styles.ratingWrapper}>
        <Gap width={12} />
        <ILStarOn />
        <ILStarOn />
        <ILStarOn />
        <ILStarOn />
        <ILStarOn />
        <Text style={styles.rating}>4.5</Text>
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 210,
    width: 200,
    borderRadius: 8,
    marginRight: 24,
  },
  foodImage: {
    width: 200,
    height: 140,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.text.black,
    marginTop: 13,
    marginHorizontal: 12,
    marginBottom: 6,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 12,
    fontFamily: fonts.regular,
    color: colors.text.gray,
    marginLeft: 4,
  },
});
