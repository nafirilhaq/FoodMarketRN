import {showMessage} from 'react-native-flash-message';

export const toast = (message, type) => {
  showMessage({
    message: message,
    type: type ? 'success' : 'danger',
  });
};
