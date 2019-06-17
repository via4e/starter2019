import React, { Component } from 'react'
import './tutorpage.scss'

class TutorialPage extends Component {
    render (){
        console.log('tutor page', this.props.text)
        const tutorial_text =  this.props.text.map( (c,index) => <li key={index}>{c}</li> );
        return (
          <div className='tutorpage'>
              <ul>
                  {tutorial_text}
              </ul>
          </div>
        )
    }
}

export default TutorialPage