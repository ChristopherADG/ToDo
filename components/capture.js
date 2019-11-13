import React, { useState } from 'react';

const Capture = (props) => {
  const [text, setText] = useState("")

  const addTask = () => {
    if (text !== '') {
      let task = {
        type: "ADD_TASK",
        payload: {
          message: text,
          completed: false,
        },
      }
      props.dispatch(task)
      document.getElementById('capture').value = '';
      setText('')
    }
  }

  return (
    <>
      <p className="padding">
        <input id="capture" className="new-task" type="text" placeholder="What?..." onChange={e => setText(e.target.value)}></input>
        <button onClick={addTask} >Add</button>
      </p>
      <style jsx>{`
        .new-task {
          float: left;
          width: 318px;
        }
        .padding {
          margin-bottom: 9%;
        }
        input[type="text"] {
          margin: 0;
          font-size: 18px;
          line-height: 18px;
          height: 18px;
          padding: 10px;
          border: 1px solid #ddd;
          background: #fff;
          border-radius: 6px;
          font-family: Lato, sans-serif;
          color: #888;
        }
        input,button {
	        outline: none;
        }

        button {
          background: none;
          border: 0px;
          color: #888;
          font-size: 15px;
          width: 60px;
          margin: 10px 0 0;
          font-family: Lato, sans-serif;
          cursor: pointer;
        }

        button:hover {
          color: #333;
        }
      `}</style>

    </>
  )
}

export default Capture