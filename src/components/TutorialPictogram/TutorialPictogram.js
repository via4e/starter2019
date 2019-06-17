import React, { Component } from 'react'
import './tutorpictogram.scss'

class TutorialPictogram extends Component {
    render () {
        return (
          <div className='tutorPictogram'>
              <span>Page : {this.props.page}</span>
          </div>
        )
    }
}

export default TutorialPictogram