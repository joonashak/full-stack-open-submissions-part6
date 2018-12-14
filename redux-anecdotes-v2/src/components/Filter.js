import React from 'react';
import { set } from '../reducers/filterReducer';


export default (props) => {
  return (
    <div>
      filter: <input type="text" onChange={event => props.store.dispatch(set(event.target.value))} />
    </div>
  );
};
