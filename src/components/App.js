import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
    render () {
        return (
            <div>
                <h1>Root - {this.props.model}</h1>
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