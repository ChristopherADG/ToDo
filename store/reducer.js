/*
task = {
  id: <int>
  message: <string>
  completed: <bool>
}
*/

var lastId = -1;

const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      lastId += 1;
      return [...state, { ...action.payload, id: lastId }]
    case "TOGGLE_TASK":
      return state.map(t => todo(t, action))
    case "COMPLETED_TASK":
      return state.map(t => completed(t, action))
    case "All_TASKS":
      return state.map(t => all(t, action))
    default:
      throw new Error();
  }
}

const todo = (state, action) => {
  if (action.id === state.id) {
    return { ...state, completed: !state.completed }
  }

  return state
}

const completed = (state, action) => {
  return state.completed ? { ...state, hidden: false } : { ...state, hidden: true }
}

const all = (state, action) => {
  return { ...state, hidden: false }
}

export default reducer;