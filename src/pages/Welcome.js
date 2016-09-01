import React from 'react';
import{ Panel } from 'react-bootstrap';

export default class Welcome extends React.Component {
	render(){
		return (
			<div className='container'>
        <div className='row'>
          <div className='col-md-8 col-xs-12'>
            <p className='text-justify lead'>Welcome to the online Child Protection Training course. Thank you for giving of your time to bring children to camp.</p>
            <p className='text-justify'>The CPT class is required by the state of Texas for all adults working with children under the Texas Youth Camp code. The certification is good for two years and then must be renewed by retaking this course. The training is broken down into four sections consisting of a video and then a group of questions covering the video. A passing grade of at least 70% is required for successful completion of the training class. You may retake the class as many times as needed to reach a passing score. When you are ready to begin press the "Start Training" at the top of your screen.</p>
            <p className='text-justify'>Once you have successfully completed the CPT class, with a passing score, enter your name and email address in the provided fields to generate your certificate. Use the browser print function to print out a copy to give to the camp. Please be sure to sign the copy stating that you watched all the videos and completed the course yourself. Then have your pastor or group leader sign the affirmation statement after they have completed your yearly background check. Certificates may be reprinted by clicking “Print Certificate” at the top of the screen.</p>
          </div>
          <div className='col-md-4 col-xs-12'>
            <Panel header="Adult Requirements" className='text-center'>
              <ol>
                <li className='text-justify'>Submit printed copies of results from criminal and sex offender background checks for the current year.</li>
                <li className='text-justify'>Complete a state-approved training and examination program on sexual abuse and child molestation and submit a valid certificate of completion.</li>
              </ol>
            </Panel>
            <div className='row'>
              <div className='col-xs-12'>
                <h3 className='text-center'>
                  Training Curriculum and Test Material Produced by
                </h3>
                <h3 className='text-center'>
                  Texas Baptist Camp Managers Association
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
		);
	}
}