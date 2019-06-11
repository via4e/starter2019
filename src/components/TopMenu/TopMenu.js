import React, {Component} from 'react'
import { Link } from 'react-router-dom';

import './topmenu.scss'

export default class TopMenu extends Component {
    render() {
        return (
            <div className="topmenu">
                <Link to="/">Tutorial</Link>
                <Link to="/booking">Booking</Link>
                <Link to="/client">Client</Link>
                <Link to="/hotelier">Hotelier</Link>
            </div>
        )
    }
}