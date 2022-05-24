import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, Image, useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useDispatch, useSelector} from 'react-redux';
import {DummyFood} from '../../../assets';
import {getFoodByCategoryAction} from '../../../redux/action';
import {colors} from '../../../utils';
import {Gap} from '../../atoms';
import FoodItem from '../FoodItem';

const renderTabBar = props => (
  <TabBar
    {...props}
    scrollEnabled
    indicatorStyle={{backgroundColor: 'black', height: 3, width: '0.1%'}}
    indicatorContainerStyle={{marginLeft: 24}}
    style={{backgroundColor: '#FFF', paddingLeft: 24}}
    tabStyle={{width: 'auto', paddingRight: 16}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          color: focused ? '#020202' : '#8D92A3',
          fontSize: 14,
          fontFamily: 'Poppins-Medium',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const NewTaste = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {new_taste} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodByCategoryAction('new_food'));
  }, []);

  return (
    <View
      style={{backgroundColor: colors.white, flex: 1, paddingHorizontal: 24}}>
      {new_taste.map(item => {
        return (
          <View>
            <Gap height={16} />
            <FoodItem
              key={item.id}
              title={item.name}
              price={item.price}
              image={item.picturePath}
              rating={item.rate}
              onPress={() => navigation.navigate('FoodDetail', item)}
            />
          </View>
        );
      })}
    </View>
  );
};
const Popular = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {popular} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodByCategoryAction('popular'));
  }, []);

  return (
    <View
      style={{backgroundColor: colors.white, flex: 1, paddingHorizontal: 24}}>
      {popular.map(item => {
        return (
          <View>
            <Gap height={16} />
            <FoodItem
              key={item.id}
              title={item.name}
              price={item.price}
              image={item.picturePath}
              rating={item.rate}
              onPress={() => navigation.navigate('FoodDetail', item)}
            />
          </View>
        );
      })}
    </View>
  );
};
const Recommended = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {recommended} = useSelector(state => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodByCategoryAction('recommended'));
  }, []);

  return (
    <View
      style={{backgroundColor: colors.white, flex: 1, paddingHorizontal: 24}}>
      {recommended.map(item => {
        return (
          <View>
            <Gap height={16} />
            <FoodItem
              key={item.id}
              title={item.name}
              price={item.price}
              image={item.picturePath}
              rating={item.rate}
              onPress={() => navigation.navigate('FoodDetail', item)}
            />
          </View>
        );
      })}
    </View>
  );
};

const renderScene = SceneMap({
  1: NewTaste,
  2: Popular,
  3: Recommended,
});

const FoodTab = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default FoodTab;
