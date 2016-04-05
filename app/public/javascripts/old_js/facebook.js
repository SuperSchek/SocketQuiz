var loggedInWithFb = null;
var fbLogin = false;

//Facebook login
window.fbAsyncInit = function() {
    FB.init({
        appId      : '357833164387167' && '358274144343069', //Left AppID: server3. Right AppID: localhost:3000
        xfbml      : true,
        version    : 'v2.5'
    });

    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            console.log('Logged in.');
            //document.getElementById('status').innerHTML = 'We are connected!';
        }
        else if (response.status === 'not_authorized') {
            // FB.login();
            console.log('Logged in, not connected.');
            //document.getElementById('status').innerHTML = 'We are not connected. =(';
        } else {
            console.log('Not logged in.');
            //document.getElementById('status').innerHTML = 'We are not logged in to Facebook. =(';
        }
    });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function login() {
    FB.login(function (response) {
        if (response.status === 'connected') {
            fbLogin = true;
            console.log('Logged in.');
            getInfo();
            $(function() {
                var $loginPage = $('.login.page'); // The login page
                var $chatPage = $('.chat.page'); // The chatroom page

                $loginPage.fadeOut();
                $chatPage.show();
                $loginPage.off('click');
            });
        } else if (response.status === 'not_authorized') {
            console.log('Logged in, not connected.');
            //document.getElementById('status').innerHTML = 'We are not connected. =(';
        } else {
            console.log('Not logged in.');
            //document.getElementById('status').innerHTML = 'We are not logged in to Facebook. =(';
        }
    });
}

function getInfo() {
    FB.api('/me', 'GET', {fields: 'first_name,last_name,name,id'}, function(response) {
        //document.getElementById('status').innerHTML = 'Je bent via Facebook ingelogd als ' + response.name;
        console.log(response.name);
        return loggedInWithFb = response.name;
    });
}