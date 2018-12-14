const initialState = '';

// Reducer
export default (state = initialState, action) => {
  const { message, type } = action;

  switch (type) {
    case 'SET':
      return message;
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

// Action creators

export const set = (message) => ({
  type: 'SET',
  message,
});

export const reset = () => ({ type: 'RESET' });
