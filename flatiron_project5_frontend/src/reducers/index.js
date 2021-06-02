const reducers = (state = {user: null, highGames: []}, action) => {
  console.log("reducers state:", state)
  switch(action.type) {
    case "LOGIN_USER":
      console.log("reducers LOGIN_USER action", action)
      // return state
      return {...state, user: {...action.payload}}

    case "LOGOUT_USER":
      console.log("LOGOUT_USER")
      console.log("LOGOUT_USER state", state)
      console.log("LOGOUT_USER action", action)
      return {...state, user: null}

    default:
      return state
  }
}

export default reducers