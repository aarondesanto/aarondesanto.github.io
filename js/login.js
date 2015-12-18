function statusChangeCallback(response) {
  console.log('statusChangeCallback: ' + response.status);
  if (response.status === 'connected') {
    console.log("Status: " + response.status);
    userLogged();
  } else if (response.status === 'not_authorized') {
    console.log("Status: " + response.status);
    userNotLogged();
  } else {
    console.log("Status: " + response.status);
    userNotLogged();
  }
};


function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}


window.fbAsyncInit = function() {
  FB.init({
    appId      : 428380597359730,
    cookie     : true,
    xfbml      : true,
    version    : 'v2.2'
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


function userLogged() {
  FB.api('/me', function(response) {
    var memWrap = document.getElementById("members-only"),
        memDiv = document.getElementById('mem-content'),
        memIcon = document.createElement("img"),
        memText = document.createElement("p");

    memDiv.innerText = "";

    memWrap.style.visibility="visible";
    memWrap.style.display="inline-block";
    memIcon.setAttribute("src", "img/memicon64.png");

    memText.innerText = "Look for this icon to find special offers.";

    memDiv.appendChild(memIcon);
    memDiv.appendChild(memText);
  });
};

function userNotLogged() {
  var memWrap = document.getElementById("members-only");
  memWrap.style.display="inline-block";
  memWrap.style.visibility="hidden";
};
