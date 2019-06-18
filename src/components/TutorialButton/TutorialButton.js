import React, { Component } from 'react'
import { connect } from 'react-redux'
import TutorialNext from '../../actions/TutorialNext'

import './tutorbutton.scss'

class TutorialButton extends Component {

    render () {
        return (
          <div onClick={this.props.nextPage}>
              <div className='tutorialbutton'>
                  <div className='tutorialbutton_text'>
                      {this.props.button_text}
                  </div>
              </div>
          </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    nextPage: () => dispatch(TutorialNext)
})



export default connect(
    mapDispatchToProps
)(TutorialButton)