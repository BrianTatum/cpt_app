import React from 'react'

export default class PageFooter extends React.Component {
	render() {
		return (
			<div className='footer'>
		      <div className='container'>
		        <div className='row'>
		          <div className='col-xs-12 col-sm-4'>
		            <a href='index.html'><img src='assets/images/logo.png' alt='Camp Logo' className='img-responsive' /></a>
		          </div>
		          <div className='col-xs-offset-2 col-xs-8 col-sm-offset-0 col-sm-4 col-md-3 col-md-offset-1'>
		            <h2>Look for us on:</h2>
		            <ul className='list-unstyled'>
		                <a href='https://www.facebook.com/etbenewton/' className='email_link'><li><i className="fa fa-facebook-official inline"></i>Facebook</li></a>
		                <a href='https://plus.google.com/+EastTexasBaptistEncampmentNewton' className='email_link'><li><i className="fa fa-google-plus-square inline"></i>Google+</li></a>
		                <a href='https://twitter.com/etbenewton' className='email_link'><li><i className="fa fa-twitter-square inline"></i>Twitter</li></a>
		              </ul>
		            <h2></h2>
		            <div className='block-center text-center'>
		              <h3>Help Support the Camp</h3>
		              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
		                <input type="hidden" name="cmd" value="_s-xclick" />
		                <input type="hidden" name="hosted_button_id" value="FUB2P693DP4PE" />
		                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" className='block-center' />
		                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" className='block-center' />
		              </form>
		            </div>
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
		);
	}
}