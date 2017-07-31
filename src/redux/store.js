import {createStore} from 'redux'

let defaultAppState = {
  showAlert : false
}

function appReducer(state=defaultAppState,action){
  switch(action.type){
    case 'SHOW_ALERT' :
      return state
    default :
      return state
  }
}

const store = createStore(appReducer)

export default store
