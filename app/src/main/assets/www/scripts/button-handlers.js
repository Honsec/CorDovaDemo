var toastButtonHandler = function(){
	window.plugins.toast.shortToast('Here\'s to you!');
}

var cordovaButtonHandler = function(){
	var message = 'Cordova version: ' + device.cordova;
	message += '\nDevice Model: ' + device.model;
	message += '\nDevice Version (Android): ' + device.version;
	alert(message);
}

var openLink = function(message){
	var url = message
/*	window.plugins.toast.shortToast("To open link in system browser, try adapting WebIntent plugin")*/
	window.open(url)
}
