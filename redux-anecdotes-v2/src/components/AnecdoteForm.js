import React from 'react';
import { create } from '../reducers/anecdoteReducer';
import { set as setNotification } from '../reducers/notificationReducer';


export default (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const content = event.target.anecdote.value;
    props.store.dispatch(create(content));
  
    event.target.anecdote.value = '';
    props.store.dispatch(setNotification(content));
  };

  return (
    <div>
      <h2>create new</h2>
        <form onSubmit={handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>create</button> 
        </form>
    </div>
  );
}
