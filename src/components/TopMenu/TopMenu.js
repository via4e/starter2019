import React, {Component} from 'react'
import { Link } from 'react-router-dom';

import './topmenu.scss'

export default class TopMenu extends Component {
    render() {
        return (
            <div className="topmenu">
                <Link to="/">Root </Link>
                <Link to="/home">Home </Link>
                <Link to="/page">Page </Link>
                <Link to="/secondpage">Second Page </Link>
            </div>
        )
    }
}