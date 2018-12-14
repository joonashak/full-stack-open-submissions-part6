import React from 'react';
import { connect } from 'react-redux';
import { set } from '../reducers/filterReducer';


const mapDispatchToProps = ({ set });

const Filter = (props) => {
  return (
    <div>
      filter: <input type="text" onChange={event => props.set(event.target.value)} />
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Filter);
