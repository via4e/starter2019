import React, { Component } from 'react'
import './circles.scss'
import Circle from "../Circle/circle";

//this.props.page - номер страницы туториала    getCircles(this.props.page)

class Circles extends Component {

    getCircles = (page) => {

        const circlesMarkers = [
            [0,0,0,0,0,0,0],
            [1,1,1,1,1,1,1],
            [2,2,2,2,2,2,2],
            [3,3,3,3,3,3,3],
            [4,4,4,4,4,4,4]
        ]

        circlesMarkers.map( c =>
           c.map( circle => {
              return <div key={circle}></div>
           })
        )
    }

    render () {
        return (
          <div className='circles'>
              { this.getCircles(this.props.page) }
          </div>
        )
    }
}

export default Circles