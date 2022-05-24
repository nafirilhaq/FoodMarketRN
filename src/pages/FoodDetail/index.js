import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {IcBackWhite, ILStarOff, ILStarOn} from '../../assets';
import {Button, Counter, Number} from '../../components';
import {colors, fonts, getData} from '../../utils';

const FoodDetail = ({navigation, route}) => {
  const itemFood = route.params;
  const [totalItem, setTotalItem] = useState(1);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getData('profile').then(res => {
      setProfile(res);
    });
  }, []);

  const Rating = () => {
    let star = [];
    for (let i = 0; i < 5; i++) {
      if (i < itemFood.rate) {
        star.push(<ILStarOn key={i} />);
      } else {
        star.push(<ILStarOff key={i} />);
      }
    }
    return star;
  };

  const onCounterChange = value => {
    setTotalItem(value);
  };

  const onOrder = () => {
    const totalPrice = totalItem * itemFood.price;
    const driver = 50000;
    const tax = (10 / 100) * totalPrice;
    const total = totalPrice + driver + tax;
    const data = {
      profile,
      itemFood,
      transaction: {
        totalItem,
        totalPrice,
        tax,
        driver,
        total,
      },
    };
    navigation.navigate('OrderSummary', data);
  };

  return (
    <View style={styles.page}>
      <ImageBackground
        source={{uri: itemFood.picturePath}}
        style={styles.foodBg}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backWrapper}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.contentWrapper}>
        <View>
          <View style={styles.topContent}>
            <Text style={styles.title}>{itemFood.name}</Text>
            <Counter onValueChange={onCounterChange} />
          </View>
          <View style={styles.ratingWrapper}>
            <Rating />
            <Number
              number={itemFood.rate}
              style={styles.ratingText}
              type="decimal"
            />
          </View>
          <Text style={styles.textDesc}>{itemFood.description}</Text>
          <Text style={styles.textTitle}>Ingredients:</Text>
          <Text style={styles.textDesc}>{itemFood.ingredients}</Text>
        </View>
        <View style={styles.bottomContent}>
          <View>
            <Text style={styles.textDesc}>Total Price:</Text>
            <Number
              number={itemFood.price * totalItem}
              style={styles.textPrice}
            />
          </View>
          <View style={styles.buttonWrapper}>
            <Button text="Order Now" onPress={onOrder} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  foodBg: {
    width: useWindowDimensions.width,
    height: 330,
  },
  backWrapper: {
    width: 30,
    height: 30,
    marginTop: 24,
    marginLeft: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'space-between',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    paddingVertical: 26,
    paddingHorizontal: 16,
  },
  topContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.text.black,
    marginBottom: 6,
  },
  ratingText: {
    fontSize: 12,
    fontFamily: fonts.regular,
    color: colors.text.gray,
    marginLeft: 4,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  textDesc: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: colors.text.gray,
  },
  textTitle: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: colors.text.black,
    marginTop: 16,
    marginBottom: 4,
  },
  bottomContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonWrapper: {
    flex: 1,
    marginLeft: 40,
  },
  textPrice: {
    fontSize: 18,
    fontFamily: fonts.regular,
    color: colors.text.black,
  },
});
