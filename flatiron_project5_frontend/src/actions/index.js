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
      console.log(data)
      dispatch({
        type: "FETCH_HIGH_SCORES",
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
        console.log("addUser", data.user)
        dispatch({type: "LOGIN_USER", payload: data.user})
        history.push(`/users/${data.user.id}`)
      } else {
        console.log("When there is a message...")
        dispatch({type: "LOGIN_FAILED", payload: data.user})
      }
    })
  }
}

export const loginUser = (user, history) => {
  console.log("action creator loginUser", user)
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
  console.log("action creator logoutUser id:", id)
  return dispatch => {
    fetch(`http://localhost:5000/logout/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${sessionStorage.getItem("jwt")}`
    }
  }).then(res => res.json()).then(data => {
    console.log("after 2nd then", data)
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
