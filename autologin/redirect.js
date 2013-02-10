if (window.location == "http://elearning.ubc.ca/lms/login-to-vista/")
	window.location.href = "https://www.auth.cwl.ubc.ca/auth/login?serviceName=webct_vista_psa";
else if (window.location == "https://ssc.adm.ubc.ca/sscportal/servlets/SRVSSCFramework")
	window.location.href = "https://www.auth.cwl.ubc.ca/auth/login?serviceName=ytestssc";
else if (window.location == "http://pilot.lms.ubc.ca/") {
	window.location.href = "https://lms.ubc.ca/Shibboleth.sso/Login?entityID=https%3A%2F%2Fshibboleth2.id.ubc.ca%2Fidp%2Fshibboleth&target=https%3A%2F%2Flms.ubc.ca%2Fwebapps%2Fportal%2Fframeset.jsp";
} else if (window.location == "http://elearning.ubc.ca/connect/") {
	window.location.href = "https://connect.ubc.ca/webapps/bb-auth-provider-shibboleth-BBLEARN/execute/shibbolethLogin?returnUrl=https%3A%2F%2Fconnect.ubc.ca%2Fwebapps%2Fportal%2Fframeset.jsp&authProviderId=_102_1"
}
