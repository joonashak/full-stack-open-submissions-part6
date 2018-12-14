import React from 'react';
import { connect } from 'react-redux';
import { reset } from '../reducers/notificationReducer';


const mapStateToProps = (state) => ({ notification: state.notification });
const mapDispatchToProps = { reset };

class Notification extends React.Component {

  componentDidUpdate = (prevProps) => {
    setTimeout(() => this.props.reset(), 5000);
  };

  render () {
    const { notification } = this.props;

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

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
