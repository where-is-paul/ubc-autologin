if (~(window.location.href).indexOf("login")) {
	chrome.extension.sendRequest({method: "getInfo"}, function(response) {
	
  login_box = document.forms[1];
  //ugly hack to get around the fact that ubc does not have
  //consistent naming for each of their login pages.
  if ('loginName' in login_box) {
	login_box.loginName.value = response.username;
  } else {
	login_box.username.value = response.username;
  }
  
  login_box.password.value = response.password;
  if (response.username != undefined) {
	//just try both ways of clicking the button
	try { //wow such hacks 
		login_box.submit.click();
	} catch(err) {
		login_box.action.click();
	}
  }
});
} else if (~(window.location.href).indexOf("UserPassword")) {
	chrome.extension.sendRequest({method: "getInfo"}, function(response) {
  document.forms[1].j_username.value = response.username;
  document.forms[1].j_password.value = response.password;
  if (response.username != undefined)
		document.forms[1].action.click();
});
}