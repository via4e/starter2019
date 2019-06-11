import React, { Component } from 'react'
import { connect } from 'react-redux'

import './app.scss'

class App extends Component {
    render () {
        return (
            <div className='app'>
                <span className='appheader'>{this.props.model}</span>
            </div>

        )
    }
}

const mapStateToProps = store => {
    console.log('store', store)
    return {
        model: store.model,
    }
}

export default connect(mapStateToProps)(App)