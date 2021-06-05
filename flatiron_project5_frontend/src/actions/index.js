export const fetchDeck = () => {
  return {
    type: "FETCH_DECK",
    payload: ""
  }
}

export const fetchHighScores = () => {
  return dispatch => {
    fetch(`http://localhost:5000/high-scores`).then(res => res.json())
    .then(data => {
      dispatch({
        type: "FETCH_HIGH_SCORES",
        payload: data
      })
    })
  }
}

export const fetchUser = (id) => {
  return dispatch => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${sessionStorage.getItem("jwt")}`
      }
    }).then(res => res.json())
    .then(data => {
      dispatch({
        type: "FETCH_USER",
        payload: data
      })
    })
  }
}

export const addUser = (user, history) => {
  return dispatch => {
    fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({user: {email: user.email.toLowerCase(), password: user.password}})
    }).then(res => res.json())
    .then(data => {
      if(data.user && !data.user.message) {
        sessionStorage.setItem("id", data.user.id)
        sessionStorage.setItem("jwt", data.jwt)
        dispatch({type: "ADD_USER", payload: data.user})
        dispatch({type: "LOGIN_USER", payload: data.user})
        history.push(`/users/${data.user.id}`)
      } else {
        dispatch({type: "LOGIN_FAILED", payload: data.user})
      }
    })
  }
}

export const loginUser = (user, history) => {
  return dispatch => {
    fetch(`http://localhost:5000/login`, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({user: {email: user.email.toLowerCase(), password: user.password}})
    }).then(res => res.json())
    .then(data => {
      if(!data.user.message) {
        sessionStorage.setItem("id", data.user.id)
        sessionStorage.setItem("jwt", data.jwt)
        dispatch({type: "LOGIN_USER", payload: data.user})
        history.push(`/users/${data.user.id}`)
      } else {
        dispatch({type: "LOGIN_FAILED", payload: data.user})
      }
    })
  }
}

export const logoutUser = (id, history) => {
  return dispatch => {
    fetch(`http://localhost:5000/logout/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${sessionStorage.getItem("jwt")}`
    }
  }).then(res => res.json()).then(data => {
    sessionStorage.clear()
    dispatch({type: "LOGOUT_USER", payload: data})
    history.push("/")
  })
  }
}

export const resetUser = () => {
  return {type: 'RESET_USER'}
}

export const setUser = (user) => {
  return {type: 'SET_USER', payload: user}
}