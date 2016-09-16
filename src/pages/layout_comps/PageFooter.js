import React from 'react'

const PageFooter = () =>
	<div className='footer hidden-print'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-sm-4'>
            <a href='http://www.etbe.org'><img src='assets/images/logo.png' alt='Camp Logo' className='img-responsive' /></a>
          </div>
          <div className='col-xs-offset-2 col-xs-8 col-sm-offset-0 col-sm-4 col-md-3 col-md-offset-1'>
            <h2>Look for us on:</h2>
            <ul className='list-unstyled'>
                <a href='https://www.facebook.com/etbenewton/' className='email_link'><li><i className="fa fa-facebook-official inline"></i>Facebook</li></a>
                <a href='https://plus.google.com/+EastTexasBaptistEncampmentNewton' className='email_link'><li><i className="fa fa-google-plus-square inline"></i>Google+</li></a>
                <a href='https://twitter.com/etbenewton' className='email_link'><li><i className="fa fa-twitter-square inline"></i>Twitter</li></a>
            </ul>
          </div>
          <div className='col-xs-offset-2 col-xs-8 col-sm-offset-0 col-sm-4 col-md-3 col-md-offset-1'>
            <h2>Contact Us:</h2>
            <ul className='list-unstyled'>
              <li>
              	<div>178 Prv Rd 7005</div>
              	<div>Newton, TX 75966</div>
              </li>
              <li></li>
              <li><i className="fa fa-phone inline"></i>(409) 379-2737</li>
              <li><i className="fa fa-fax inline"></i>(409) 331-5218</li>
              <li><a href='mailto:info@etbe.org' className='email_link'><i className="fa fa-envelope-o inline"></i>info@etbe.org</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

export default PageFooter;