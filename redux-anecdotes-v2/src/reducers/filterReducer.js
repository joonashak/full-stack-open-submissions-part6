const initialState = '';

// Reducer
export default (state = initialState, action) => {
  const { message, type } = action;

  switch (type) {
    case 'SET_FILTER':
      return message;
    default:
      return state;
  }
};

// Action creators

export const set = (message, variant) => ({
  type: 'SET_FILTER',
  message,
  variant,
});
