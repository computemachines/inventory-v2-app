import { INCREMENT } from './constants'

function counter(state = {counter: 0}, action) {
  switch(action.type) {
  case INCREMENT:
    return Object.assign({}, state, {counter: state.counter + 1})
  default:
    return state
  }
}

export default counter
