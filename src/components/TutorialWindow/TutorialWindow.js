import React, { Component } from 'react'
import TutorialPage from "../TutorialPage/TutorialPage";
import TutorialButton from "../TutorialButton/TutorialButton";
import TutorialPictogram from "../TutorialPictogram/TutorialPictogram";

import './tutorwindow.scss'

class TutorialWindow extends Component {
    render () {
        console.log ('this.props', this.props)

        const data = this.props.pagedata;
        const page = this.props.page;

        const text = data.window_text.slice(0,page+1);
        const button_text = data.button_text[page];

        return (
            <div>
                <div className='tutorialwindow'>
                    <div className="tutorHeader">
                        <span>КАК ЭТО РАБОТАЕТ?</span>
                    </div>
                    <TutorialPictogram page={page}/>
                    <TutorialPage text={text}/>
                    <TutorialButton button_text={button_text}/>
                </div>
            </div>
        )
    }
}

export default TutorialWindow