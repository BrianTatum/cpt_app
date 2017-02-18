import React from 'react'

const PageFooter = () =>
	<div className='footer hidden-print'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-sm-4'>
            <a href='http://www.pbacamp.org/'><img src='assets/images/pbclogo.png' alt='Camp Logo' className='img-responsive' /></a>
          </div>
          <div className='col-xs-offset-2 col-xs-8 col-sm-offset-0 col-sm-4 col-md-3 col-md-offset-1'>
            <h2>Look for us on:</h2>
            <ul className='list-unstyled'>
                <a href='https://www.facebook.com/plainsbaptistcamp/' className='email_link'><li><i className="fa fa-facebook-official inline"></i>Facebook</li></a>
                <a href='https://www.instagram.com/plainsbaptist/' className='email_link'><li><i className="fa fa-instagram inline"></i>Instagram</li></a>
                <a href='https://twitter.com/PlainsBaptist/' className='email_link'><li><i className="fa fa-twitter-square inline"></i>Twitter</li></a>
            </ul>
          </div>
          <div className='col-xs-offset-2 col-xs-8 col-sm-offset-0 col-sm-4 col-md-3 col-md-offset-1'>
            <h2>Contact Us:</h2>
            <ul className='list-unstyled'>
              <li>
              	<div>3001 Love Rd</div>
              	<div>Floydada, TX 79235</div>
              </li>
              <li></li>
              <li><i className="fa fa-phone inline"></i>(806) 983-3954</li>
              <li><a href='mailto:info@pbacamp.org' className='email_link'><i className="fa fa-envelope-o inline"></i>info@pbacamp.org</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

export default PageFooter;