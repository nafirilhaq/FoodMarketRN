import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {DummyFood, ILStarOff, ILStarOn} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';

const FoodCard = ({image, title, rating, onPress}) => {
  const Rating = () => {
    let star = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        star.push(<ILStarOn key={i} />);
      } else {
        star.push(<ILStarOff key={i} />);
      }
    }
    return star;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={image} style={styles.foodImage} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.ratingWrapper}>
        <Gap width={12} />
        <Rating />
        <Text style={styles.rating}>{rating}</Text>
      </View>
    </TouchableOpacity>
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
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
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
