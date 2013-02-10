//some issue with chrome popup prevents tab key from working correctly.
window.onload = loadOptions;

function loadOptions() {
	var form = document.getElementById("info");
	var user = localStorage["user"];
	var pass = localStorage["pass"];

	form.username.value = user;
	form.password.value = pass;
}

function saveOptions() {
	var form = document.getElementById("info");
	var user = form.username.value;
	var pass = form.password.value;
	localStorage["user"] = user;
	localStorage["pass"] = pass;
	alert("User info saved.");
}

function eraseOptions() {
	localStorage.removeItem("user");
	localStorage.removeItem("pass");
	alert("User info removed.");
	location.reload();
}

function saveHandler(e) {
  saveOptions();
}

function eraseHandler(e) {
  eraseOptions();
}

function simulateKeyPress(charCode) {
  jQuery.event.trigger({ type : 'keypress', which : charCode });
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("save").addEventListener('click', saveHandler);
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("erase").addEventListener('click', eraseHandler);
});