import React from 'react';
import { reset } from '../reducers/notificationReducer';


export default class Notification extends React.Component {

  componentDidUpdate = (prevProps) => {
    setTimeout(() => this.props.store.dispatch(reset()), 5000);
  };

  render () {
    const { notification } = this.props.store.getState();

    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1,
    };

    return (
      <div style={style}>
        {notification}
      </div>
    );
  }
};
