import React, { Component } from 'react'

import './tutorpage.scss'

class TutorialPage extends Component {
    render () {
        return (
          <div className='tutorpage'>
              {this.props.text}
          </div>
        )
    }
}

export default TutorialPage