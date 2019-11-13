import React, { useReducer } from 'react'
import Task from '../components/task'
import Capture from '../components/capture'

import reducer from '../store/reducer'

const Home = () => {
  const [state, dispatch] = useReducer(reducer, [])

  const showAll = () => {
    let tasks = {
      type: "All_TASKS",
      payload: state
    }
    dispatch(tasks)
  }

  const showCompleted = () => {
    let task = {
      type: "COMPLETED_TASK"
    }
    dispatch(task)
  }

  return (
    <>
      <div className="title">
        <h2>My Tasks</h2>
      </div>
      <div className="container">
        <Capture dispatch={dispatch} />
        {
          state.map(t => <Task
            key={t.id}
            id={t.id}
            text={t.message}
            completed={t.completed}
            hidden={t.hidden}
            dispatch={dispatch}
          />)
        }
        <div style={{ 'textAlign': 'right' }}>
          <button className="button-all" onClick={showAll}>All</button>
          <button className="button-complete" onClick={showCompleted}>Completed</button>
        </div>
      </div>
      <style jsx>{`
        :global(body) {
          background: #fff;
          color: #333;
          font-family: Lato, sans-serif;
          background-color: lightyellow;
        }
        .title {
          padding-top: 4%;
          text-align: center;
          font-family: Lato, sans-serif;r
          line-height: 18px;
        }
        .container {
          display: block;
          width: 400px;
          margin: 10px auto 100px;
          background-color:#fff;
          padding: 2%;
          border-radius: 5px;
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
          transition: 0.3s;
        }
        .button-complete {
          color: #007600 !important;
          text-transform: uppercase;
          text-decoration: none;
          background: none;
          border: 0px;
          padding: 2%;
          display: inline-block;
          transition: all 0.4s ease 0s;
        }
        .button-all {
          margin-right: 2%;
          color: #0000b1 !important;
          text-transform: uppercase;
          text-decoration: none;
          background: none;
          border: 0px;
          padding: 2%;
          display: inline-block;
          transition: all 0.4s ease 0s;
        }
      `}</style>
    </>
  )
}
export default Home
