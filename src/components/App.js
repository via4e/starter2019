import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tutorial from './Tutorial/Tutorial.js'
import TutorialNext from '../actions/TutorialNext'

import './app.scss'

class App extends Component {
    render () {
        return (
            <div className='app'>
                <Tutorial page={this.props.page}/>
            </div>
        )
    }
}

const mapStateToProps = store => {
    console.log('store', store)
    return {
        page: store.init.tutorial_page,
    }
};

const mapDispatchToProps = dispatch => ({
    nextPage: () => dispatch
})


export default connect(
    mapStateToProps,

)(App)