import React, {Component} from 'react'
import './booking.scss'
import {connect} from 'react-redux'
import BookingPage from "../BookingPage/BookingPage";


class Booking extends Component {
    render () {
        const page = 0;
        console.log('bkng props', this.props)

        return (
            <div className='booking'>
                <div className='bookingheader'>
                    { this.props.booking }
                </div>
                <BookingPage/>
                <span>page: { page }</span>
            </div>

        )
    }
}

const mapStateToProps = store => {
    console.log('store', store)
    return {
        booking: store.init.booking,
    }
}

export default connect(mapStateToProps)(Booking)
