import React from 'react';
import { vote } from '../reducers/anecdoteReducer';


export default (props) => {
  const { store } = props;
  const { anecdotes } = store.getState();
  const filtered = anecdotes.filter(a => a.content.includes(store.getState().filter));

  return (
    <div>
      <h2>Anecdotes</h2>
      {filtered.sort((a, b) => b.votes - a.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => props.store.dispatch(vote(anecdote.id))}>
              vote
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
