import React, { Component } from 'react'
import './tutorpictogram.scss'
import Circles from "../Circles/circles";

//this.props.page - номер страницы туториала

class TutorialPictogram extends Component {
    render () {
        return (
          <div className='tutorPictogram'>
              <Circles/>
          </div>
        )
    }
}

export default TutorialPictogram