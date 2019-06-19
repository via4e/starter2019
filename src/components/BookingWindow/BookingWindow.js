import React, { Component } from 'react'

import './bookingwindow.scss'
import BookingPage from "../BookingPage/BookingPage";

class BookingWindow extends Component {
    render () {
        console.log ('booking props', this.props)

        return (
            <div>
                <div className='bookingwindow'>
                    <BookingPage/>
                </div>
            </div>
        )
    }
}

export default BookingWindow