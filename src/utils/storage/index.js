import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (storagaKey, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storagaKey, jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getData = async storageKey => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
