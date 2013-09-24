// Custom JS Application Code

// If using JSLint for syntax debugging, include the following two lines for looser management
/*jslint browser: true, sloppy: true, white: true*/
/*global $, console, alert, app*/

$(function() { 
	app.init();
});

var app = { 

	init: function() { 
		//this.listeners();
		console.log(this.settings.name + "(v" + this.settings.version + ") Started");
		var speakerList = $('#speakerList').children('section');
		console.log(speakerList);
		if (speakerList) {
			speakerList.sort(function(a,b){
				var temp = parseInt( Math.random()*10 );
	            var temp = temp -5;
	            return temp>0 ? 1 : -1;
			}).prependTo($('#speakerList'));
		}
	},
	
	listeners: function() { 
		// Application Listeners can be loaded here for easy configuration
	},
	
	settings: { 	
		name: "JS.everywhere(2013)",	
		version: "1.0.0",
		ga_analytics: "UA-30228440-1"
	}
	
};