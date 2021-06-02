export const fetchDeck = () => {
  return {
    type: "FETCH_DECK",
    payload: ""
  }
}

export const fetchHighScores = () => {
  return {
    type: "FETCH_HIGH_SCORES",
    payload: ""
  }
}

export const addUser = (user) => {
  return {type: "ADD_USER", payload: user}
}

export const loginUser = (user, history) => {
  console.log("action creator loginUser", user)
  return dispatch => {
    fetch(`http://localhost:5000/login`, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({user: {email: user.email, password: user.password}})
    }).then(res => res.json())
    .then(data => {
      console.log("action creator loginUser user.games:", data.user.games)
      sessionStorage.setItem("jwt", data.jwt)
      dispatch({type: "LOGIN_USER", payload: data.user})
      history.push(`/users/${data.user.id}`)
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