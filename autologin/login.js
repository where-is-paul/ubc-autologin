if (~(window.location.href).indexOf("login")) {
	chrome.extension.sendRequest({method: "getInfo"}, function(response) {
  document.forms[1].loginName.value = response.username;
  document.forms[1].password.value = response.password;
  if (response.username != undefined)
		document.forms[1].action.click();
});
} else if (~(window.location.href).indexOf("UserPassword")) {
	chrome.extension.sendRequest({method: "getInfo"}, function(response) {
  document.forms[1].j_username.value = response.username;
  document.forms[1].j_password.value = response.password;
  if (response.username != undefined)
		document.forms[1].action.click();
});
}