const reducers = (state = {user: null, highGames: []}, action) => {
  console.log("reducers state:", state)
  switch(action.type) {
    case "LOGIN_USER":
      return {...state, user: {...action.payload}}

    case "LOGIN_FAILED":
      return {...state, user: action.payload}

    case "LOGOUT_USER":
      return {...state, user: null}

    case "RESET_USER":
      return {...state, user: null}

    default:
      return state
  }
}

export default reducers