import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tutorial from './Tutorial/Tutorial'

import './app.scss'

class App extends Component {

    render () {
        const page = 0;

        return (
            <div className='app'>
                <span className='appheader'>{this.props.model}</span>
               <Tutorial page={page}/>
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