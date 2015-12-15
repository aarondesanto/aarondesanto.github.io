function statusChangeCallback(response) {
  console.log('statusChangeCallback: ' + response.status);
  if (response.status === 'connected') {
    testAPI();
    document.getElementById('members-only').innerText = 'Welcome.';
  } else if (response.status === 'not_authorized') {
    document.getElementById('members-only').innerText = 'Please log into Kickstand with Facebook.';
  } else {
    document.getElementById('members-only').innerText = 'Please log into Facebook.';
  }
}


function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

window.fbAsyncInit = function() {
  FB.init({
    appId      : 428380597359730,
    cookie     : true,  // enable cookies to allow the server to access
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.2' // use version 2.2
  });


  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
};


(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


function testAPI() {
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
    console.log('Successful login for: ' + response.name);
    displayOffer(response);
  });
}
