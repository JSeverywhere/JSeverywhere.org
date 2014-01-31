// Custom JS Application Code

// If using JSLint for syntax debugging, include the following two lines for looser management
/*jslint browser: true, sloppy: true, white: true*/
/*global $, console, app*/

$(function() {
	app.init();
});

var app = {
	init: function() {
		//this.listeners();
		console.log(this.settings.name + "(v" + this.settings.version + ") Started");
		this.randomList($('#videos'), 'div.movieWrap');
		this.randomList($('#mainSponsors'),'li');
		this.randomList($('#speakerSponsors'),'li');
	},
	randomList: function(target, itemSel) {
		var daList = target.children(itemSel);
		if (daList) {
			daList.sort(function(a,b){
				return parseInt( Math.random()*10 ) > 5 ? 1 : -1;
			}).prependTo(target);
		}
	},
	listeners: function() {
		// Application Listeners can be loaded here for easy configuration
	},
	settings: {
		name: "JS.everywhere(2013)",
		version: "1.2.0",
		ga_analytics: "UA-30228440-1"
	}
};