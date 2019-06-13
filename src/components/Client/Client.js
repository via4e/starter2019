import React, {Component} from 'react'
import TopMenu from '../TopMenu/TopMenu'

import './client.scss'
import {connect} from 'react-redux'

class Client extends Component {
    render () {
        console.log('client props', this.props)

        return (
            <div className='client'>
                <div className='clientheader'>
                    {this.props.client}
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => {
    console.log('store', store)
    return {
        client: store.init.client,
    }
}

export default connect(mapStateToProps)(Client)

