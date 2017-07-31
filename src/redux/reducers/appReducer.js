let defaultAppState = {
  showAlert : false,
  alertMsg : 'CESHI'
}

export default function appReducer(state=defaultAppState,action){
  switch(action.type){
    case 'SHOW_ALERT' :
      return state
    case 'HIDE_ALERT' :
      return state
    default :
      return state
  }
}
