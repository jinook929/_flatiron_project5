import React from 'react'
import { connect } from 'react-redux'

export const Home = (props) => {
  console.log("Home")
  console.log(props)
  return (
    <div>
      Home: {props.user.email} (First Game Score: {props.games ? props.games[0].score : `None played...`})
    </div>
  )
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
