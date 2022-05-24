import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {EmptyOrder, Gap, Header, OrderTab} from '../../components';
import {useSelector} from 'react-redux';

const Order = () => {
  const {orders} = useSelector(state => state.orderReducer);

  return (
    <View style={styles.page}>
      {orders.length < 1 ? (
        <EmptyOrder />
      ) : (
        <>
          <Header title="Your Orders" subTitle="Wait for the best meal" />
          <Gap height={24} />
          <View style={styles.content}>
            <OrderTab />
          </View>
        </>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
