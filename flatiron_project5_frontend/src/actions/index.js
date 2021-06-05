export const fetchDeck = () => {
  console.log("actions fetchDeck")
  return {
    type: "FETCH_DECK",
    payload: ""
  }
}

export const fetchHighScores = () => {
  console.log("actions fetchHighScores")
  return dispatch => {
    fetch(`http://localhost:5000/high-scores`).then(res => res.json())
    .then(data => {
      console.log("fetchHighScores fetched:", data)
      dispatch({
        type: "FETCH_HIGH_SCORES",
        payload: data
      })
    })
  }
}

export const fetchUser = (id) => {
  console.log("actions fetchUser")
  return dispatch => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${sessionStorage.getItem("jwt")}`
      }
    }).then(res => res.json())
    .then(data => {
      console.log("fetchUser fetched:", data)
      dispatch({
        type: "FETCH_USER",
        payload: data
      })
    })
  }
}

export const addUser = (user, history) => {
  console.log("actions fetchHighScores", user)
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
  console.log("actions loginUser", user)
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
  console.log("actions logoutUser id:", id)
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
  console.log("actions resetUser")
  return {type: 'RESET_USER'}
}

export const setUser = (user) => {
  console.log("actions setUser", user)
  return {type: 'SET_USER', payload: user}
}

// export const refreshUserGames = (userId) => {
//   console.log("actions setUser", userId)
//   if(userId) {
//     return dispatch => {
//       fetch(`http://localhost:5000/users/${userId}`, {
//         method: "GET",
//         headers: {
//           'Content-Type': 'application/json',
//           "Authorization": `Bearer ${sessionStorage.getItem("jwt")}`
//         }
//       }).then(res => res.json())
//       .then(data => {
//         console.log("refreshUserGames", data)
//         dispatch({type: 'REFRESH_USER_GAMES', payload: data})
//         return
//       })
//     }
//   }
//   return {type: "DO_NOTHING"}
// }