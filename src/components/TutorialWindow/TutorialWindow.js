import React, { Component } from 'react'
import TutorialPage from "../TutorialPage/TutorialPage";
import TutorialButton from "../TutorialButton/TutorialButton";

import './tutorwindow.scss'


class TutorialWindow extends Component {
    render () {


        const data = this.props.pagedata;
        const page = this.props.page;

        const text = data[page].window_text;
        const button_text = data[page].button_text;

        return (
            <div>
                <div className='tutorialwindow'>
                    <TutorialPage text={text}/>
                    <TutorialButton button_text={button_text}/>
                </div>
            </div>
        )
    }
}

export default TutorialWindow