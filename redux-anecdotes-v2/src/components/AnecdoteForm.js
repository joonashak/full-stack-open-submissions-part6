import React from 'react';
import { connect } from 'react-redux';
import { create } from '../reducers/anecdoteReducer';
import { set as setNotification } from '../reducers/notificationReducer';


const mapDispatchToProps = { setNotification, create };

const AnecdoteForm = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const content = event.target.anecdote.value;
    props.create(content);
  
    event.target.anecdote.value = '';
    props.setNotification(content);
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
};

export default connect(null, mapDispatchToProps)(AnecdoteForm);
