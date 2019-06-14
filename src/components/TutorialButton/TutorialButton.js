import React, { Component } from 'react'

import './tutorbutton.scss'

class TutorialButton extends Component {
    render () {
        return (
          <div className='tutorialbutton'>
              <div className='tutorialbutton_text'>
                  {this.props.button_text}
              </div>
          </div>
        )
    }
}

export default TutorialButton