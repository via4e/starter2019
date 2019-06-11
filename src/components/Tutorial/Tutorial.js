import React, { Component } from 'react'

import './tutorial.scss'
import tutortext from './tutorial.json'

class Tutorial extends Component {
    render () {
        return (
            <div className='tutorial'>
                   Component:tutorial
                   <br />
                   <span>{ this.props.page }</span>
            </div>
        )
    }
}

export default Tutorial
