import React, {Component} from 'react'
import './booking.scss'
import {connect} from 'react-redux'
import BookingWindow from "../BookingWindow/BookingWindow";


class Booking extends Component {
    render () {
        const page = 0;
        console.log('bkng props', this.props)

        return (
            <div className='app'>
                <div className="booking">
                    <BookingWindow/>
                </div>
            </div>

        )
    }
}

const mapStateToProps = store => {
    //console.log('store', store)
    return {
        booking: store.init.booking,
    }
}

export default connect(mapStateToProps)(Booking)


/*
<div className='bookingheader'>
    { this.props.booking }
</div>

<span>page: { page }</span>*/
