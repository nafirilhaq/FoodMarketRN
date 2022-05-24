import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Button, FoodItem, Gap, Header, ValueItem} from '../../components';
import {colors, fonts, getData} from '../../utils';
import Axios from 'axios';
import {API_HOST} from '../../config';

const OrderSummary = ({route, navigation}) => {
  const {profile, itemFood, transaction} = route.params;

  const onCheckout = () => {
    const dataCheckout = {
      food_id: itemFood.id,
      user_id: profile.id,
      quantity: transaction.totalItem,
      total: transaction.total,
      status: 'PENDING',
    };

    navigation.navigate('Payment', dataCheckout);
  };
  return (
    <ScrollView>
      <Header title="Order Summary" subTitle="You deserve better meal" onBack />
      <View style={styles.contentWrapper}>
        <Text style={styles.textHeader}>Item Ordered</Text>
        <Gap height={12} />
        <FoodItem
          isItem
          title={itemFood.name}
          price={itemFood.price}
          image={itemFood.picturePath}
          item={transaction.totalItem}
        />
        <Gap height={16} />
        <Text style={styles.textHeader}>Details Transaction</Text>
        <Gap height={8} />
        <ValueItem
          value={itemFood.name}
          item={transaction.totalPrice}
          isCurrency
        />
        <ValueItem value="Driver" item={transaction.driver} isCurrency />
        <ValueItem value="Tax 10%" item={transaction.tax} isCurrency />
        <ValueItem
          value="Total Price"
          item={transaction.total}
          itemColor="#1ABC9C"
          isCurrency
        />
      </View>
      <View style={styles.contentWrapper}>
        <Text style={styles.textHeader}>Deliver to:</Text>
        <Gap height={8} />
        <ValueItem value="Name" item={profile.name} />
        <ValueItem value="Phone No." item={profile.phoneNumber} />
        <ValueItem value="Address" item={profile.address} />
        <ValueItem value="House No." item={profile.houseNumber} />
        <ValueItem value="City" item={profile.city} />
      </View>
      <View style={styles.buttonWrapper}>
        <Button text="Checkout Now" onPress={onCheckout} />
      </View>
    </ScrollView>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  contentWrapper: {
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  textHeader: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: colors.text.black,
  },
  buttonWrapper: {
    paddingHorizontal: 24,
    marginVertical: 24,
  },
});
