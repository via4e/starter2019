import React, { Component } from 'react'

import './tutorial.scss'
import tutortext from './tutorial.json'
import TutorialWindow from "../TutorialWindow/TutorialWindow";

class Tutorial extends Component {
    render () {
        return (
            <div className='tutorial'>
                <TutorialWindow page={this.props.page} pagedata={tutortext}/>
            </div>
        )
    }
}

export default Tutorial
