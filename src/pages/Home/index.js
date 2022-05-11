import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {FoodCard, Gap, Header} from '../../components';

const Home = () => {
  return (
    <View>
      <Header title="FoodMarket" subTitle="Let’s get some foods" onProfile />
      <Gap height={24} />
      <ScrollView horizontal>
        <View style={styles.foodCardWrapper}>
          <Gap width={24} />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  foodCardWrapper: {
    flexDirection: 'row',
  },
});
