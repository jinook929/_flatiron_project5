const reducers = (state = {user: null, highScores: []}, action) => {
  switch(action.type) {
    case "FETCH_HIGH_SCORES":
      return {...state, highScores: [...action.payload]}

    case "FETCH_USER":
      return {...state, user: {...action.payload.user}}

    case "LOGIN_USER":
      return {...state, user: {...action.payload}}

    case "LOGIN_FAILED":
      return {...state, user: action.payload}

    case "LOGOUT_USER":
      return {...state, user: null}

    case "RESET_USER":
      return {...state, user: null}

    case "SET_USER":
      return {...state, user: action.payload}

    default:
      return {...state}
  }
}

export default reducers