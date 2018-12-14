import React from 'react';
import { connect } from 'react-redux';
import { vote } from '../reducers/anecdoteReducer';


const mapStateToProps = (state) => ({ anecdotes: state.anecdotes.filter(a => a.content.includes(state.filter)) });
const mapDispatchToProps = ({ vote });

const AnecdoteList = (props) => {
  const { anecdotes } = props;

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => props.vote(anecdote.id)}>
              vote
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);
