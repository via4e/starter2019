import React, { Component } from 'react'

import './tutorial.scss'
import tutortext from './tutorial.json'
import TutorialWindow from "../TutorialWindow/TutorialWindow";

class Tutorial extends Component {
    render () {
        return (
            <div className='tutorial'>
                   Component:tutorial
                   <br />
                   <span>{ this.props.page }</span>
                   <br />
                   {tutortext.first}
                   <br />
                   <button onClick={() => dispatch({ type: 'TUTORIAL_NEXT' })}>(Next)</button>
                <TutorialWindow/>
            </div>
        )
    }
}

export default Tutorial
