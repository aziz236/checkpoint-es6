
 import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  
  return (
    <div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
<div className="container">
    

    <div className="omb_login">
    	<h3 className="omb_authTitle">Login or <a href="#">Sign up</a></h3>
		<div className="row omb_row-sm-offset-3 omb_socialButtons">
    	    <div className="col-xs-4 col-sm-2">
		        <a href="#" className="btn btn-lg btn-block omb_btn-facebook">
			        <i className="fa fa-facebook visible-xs"></i>
			        <span className="hidden-xs">Facebook</span>
		        </a>
	        </div>
        	<div className="col-xs-4 col-sm-2">
		        <a href="#" className="btn btn-lg btn-block omb_btn-twitter">
			        <i className="fa fa-twitter visible-xs"></i>
			        <span className="hidden-xs">
                Twitter
                </span>
		        </a>
	        </div>	
        	<div className="col-xs-4 col-sm-2">
		        <a href="#" className="btn btn-lg btn-block omb_btn-google">
			        <i className="fa fa-google-plus visible-xs"></i>
			        <span className="hidden-xs">Google+</span>
		        </a>
	        </div>	
		</div>

		<div className="row omb_row-sm-offset-3 omb_loginOr">
			<div className="col-xs-12 col-sm-6">
				<hr className="omb_hrOr"/>
				<span className="omb_spanOr">or</span>
			</div>
		</div>

		<div className="row omb_row-sm-offset-3">
			<div className="col-xs-12 col-sm-6">	
			    <form className="omb_loginForm" action="" autocomplete="off" method="POST">
					<div className="input-group">
						<span className="input-group-addon"><i className="fa fa-user"></i></span>
						<input type="text" className="form-control" name="username" placeholder="email address"/>
					</div>
					<span className="help-block"></span>
										
					<div className="input-group">
						<span className="input-group-addon"><i className="fa fa-lock"></i></span>
						<input  type="password" className="form-control" name="password" placeholder="Password"/>
					</div>
                    <span className="help-block">Password error</span>

					<button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
				</form>
			</div>
    	</div>
		<div className="row omb_row-sm-offset-3">
			<div className="col-xs-12 col-sm-3">
				<label className="checkbox">
					<input type="checkbox" value="remember-me"/>Remember Me
		</label>
			</div>
			<div className="col-xs-12 col-sm-3">
				<p className="omb_forgotPwd">
					<a href="#">Forgot password?</a>

</p>
	</div>
		</div>	    	
	</div>



        </div>
        <footer class="footer">

<div class="side-informatons">
    <div class="side-icons">
        <img class="side-footer-control" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/107765035_982448635529038_158937687691769419_n.png?_nc_cat=108&_nc_sid=b96e70&_nc_ohc=hb3r9MQrZZgAX_ll47y&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=0d7ed78029bcae45c0fffb22ce2780d9&oe=5F2FA8D6" alt="phone-icon"/>

    </div>
    <div class="phone-number">999 999 999</div>
    <div class="side-icons2">
        <img class="side-footer-control2" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/108199932_574022313286600_6832886990005473314_n.png?_nc_cat=105&_nc_sid=b96e70&_nc_ohc=IR-k4UDY7x4AX-beTTM&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=f76e02017f774958b5f2d9d8a86e0ddc&oe=5F2F9518" alt="gmail-icon"/>
    </div>
    <div class="phone-number">**********@gmail.com</div>
</div>

<div class="contact-us">
    <b>Contact us </b>
</div>
<div class="social-icons-parent">
    <ul class="row">
        <li class="social-icons-li">
            <a href="https://www.facebook.com/profile.php?id=100006314118480">
                <img class="social-icons" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_facebook-128.png"/>
            </a>
        </li>
        <li class="social-icons-li">
            <a href="https://twitter.com/filmhouse8">
                <img class="social-icons" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/twitter_online_social_media-128.png"/>
            </a>
        </li>
        <li class="social-icons-li">
            <a href="https://www.instagram.com/azizbounhas/">
                <img class="social-icons" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/instagram_online_social_media_photo-128.png"/>
            </a>
        </li>
        <li class="social-icons-li">
            <a href="https://mail.google.com/mail/u/0/#inbox">
                <img class="social-icons" src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_google_plus-128.png"/>
            </a>
        </li>
    </ul>
</div>


<div class="copyright">
    <p> &copy; Stealing is BAD </p>
</div>

</footer>
        </div>
  );
}

export default App;
