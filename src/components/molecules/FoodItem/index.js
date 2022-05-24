import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {DummyFood, ILStarOff, ILStarOn} from '../../../assets';
import {colors, fonts} from '../../../utils';
import Number from '../Number';

const FoodItem = ({title, price, image, rating, isItem, item, onPress}) => {
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
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <Image source={{uri: image}} style={styles.foodImage} />
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Number number={price} style={styles.subTitle} />
      </View>
      <View style={styles.rating}>
        {isItem ? (
          <Text style={styles.textItem}>{item} items</Text>
        ) : (
          <>
            <Rating />
            <Number number={rating} style={styles.ratingText} type="decimal" />
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default FoodItem;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  foodImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  titleWrapper: {
    flex: 1,
    marginHorizontal: 12,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.text.black,
  },
  subTitle: {
    fontSize: 13,
    fontFamily: fonts.regular,
    color: colors.text.gray,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 12,
    fontFamily: fonts.regular,
    color: colors.text.gray,
    marginLeft: 4,
  },
  textItem: {
    fontSize: 13,
    fontFamily: fonts.regular,
    color: colors.text.gray,
  },
});
