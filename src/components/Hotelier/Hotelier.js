import React, { Component } from 'react'

import './hotelier.scss'
import {connect} from 'react-redux'


class Hotelier extends Component {
    render () {
        console.log('hotelier props', this.props)

        return (
            <div className='hotelier'>
                <div className='hotelierheader'>
                    {this.props.hotelier}
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => {
    console.log('store', store)
    return {
        hotelier: store.init.hotelier,
    }
}

export default connect(mapStateToProps)(Hotelier)