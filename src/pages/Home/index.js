import React, {useEffect, useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FoodCard, Gap, Header, FoodTab} from '../../components';
import {getFoodAction} from '../../redux/action';
import {getData} from '../../utils';

const Home = ({navigation}) => {
  const dispatch = useDispatch();

  const {food} = useSelector(state => state.homeReducer);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    dispatch(getFoodAction());
    console.log('food', food);
    getData('profile').then(res => {
      setProfile(res);
    });
  }, []);

  return (
    <View style={styles.page}>
      <Header
        title="FoodMarket"
        subTitle="Let’s get some foods"
        onProfile
        avatar={profile.profile_photo_url}
      />
      <Gap height={24} />
      <View style={styles.foodCardWrapper}>
        <ScrollView horizontal>
          <Gap width={24} />
          {food.map(itemFood => {
            return (
              <FoodCard
                key={itemFood.id}
                title={itemFood.name}
                image={{uri: itemFood.picturePath}}
                rating={itemFood.rate}
                onPress={() => navigation.navigate('FoodDetail', itemFood)}
              />
            );
          })}
        </ScrollView>
      </View>
      <Gap height={24} />
      <View style={styles.foodTabWrapper}>
        <FoodTab />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  foodCardWrapper: {
    flexDirection: 'row',
  },
  foodTabWrapper: {
    flex: 1,
  },
});
