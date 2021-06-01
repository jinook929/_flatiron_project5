const reducers = (state = {}, action) => {
  console.log("reducers")
  return {...state, user: {email: "test@test.com"}, games: [{score: 0, memo: "fun", userId: 1}]}
}

export default reducers