chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.method == "getInfo")
      sendResponse({username: localStorage["user"], 
					password: localStorage["pass"]});
});