import React, { useState } from 'react';

const Task = (props) => {


  const toggle = () => {
    props.dispatch({ type: 'TOGGLE_TASK', id: props.id })
  }

  return (
    <div className={props.hidden ? 'hidden' : 'task'}>
      <input className="toggle__input" type="checkbox" value={props.completed} onChange={toggle} ></input>
      <span className={props.completed ? 'marked' : ''} >
        <span className="content">{props.text}</span>
      </span>

      <style jsx>{`
           .task {
             font-size: 20px;
             margin: 4% 2% 3% 2%
           }

           .hidden {
             display: none;
           }

           .content {
             margin-left: 10px;
           }

           .marked {
             color: gray;
             text-decoration: line-through;
           }
        `}</style>
    </div>
  )
}

export default Task