const initRegisterState = {
  name: 'aa',
  email: '',
  password: '',
  password_confirmation: '',
  isEmailValid: false,
  isPasswordValid: false,
  isPasswordConfirmationValid: false,
  isNameValid: false,
};

export const registerReducer = (state = initRegisterState, action) => {
  if (state.type === 'SET_REGISTER') {
    return {
      ...state,
      name: action.value.name,
      email: action.value.email,
      password: action.value.password,
      password_confirmation: action.value.password_confirmation,
    };
  }
  if (action.type === 'SET_EMAIL_INVALID') {
    return {
      ...state,
      isEmailValid: action.value,
    };
  }
  if (action.type === 'SET_PASSWORD_INVALID') {
    return {
      ...state,
      isPasswordValid: action.value,
    };
  }
  if (action.type === 'SET_PASSWORD_CONFIRMATION_INVALID') {
    return {
      ...state,
      isPasswordConfirmationValid: action.value,
    };
  }
  if (action.type === 'SET_NAME_INVALID') {
    return {
      ...state,
      isNameValid: action.value,
    };
  }
  if (action.type === 'SET_RESET_INVALID') {
    return {
      ...state,
      isNameValid: false,
      isEmailValid: false,
      isPasswordValid: false,
      isPasswordConfirmationValid: false,
    };
  }
  return state;
};
