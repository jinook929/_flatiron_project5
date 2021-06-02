import React from 'react'
import { connect } from 'react-redux'

export const HighScores = (props) => {
  return (
    <div>
      High Scores!!!
    </div>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(HighScores)
