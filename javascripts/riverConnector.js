/* 
	Use MOCK ajax if not loading file from http server
*/
if (window.location.href.match(/^http/)) {
	$.mockjaxClear();
}

var riverConnector = function() {
	var loadStreamworkConfig = function(success) {
		var url = "/api/rest/" + sapinnojam.constants.RIVER_ACCOUNT + "/" + sapinnojam.constants.CONFIGURATION_APP + "/default";
		jQuery.ajax({
			type: 'GET',
			url: url,
			dataType: "json",
			beforeSend: function(xhr) {
				xhr.setRequestHeader("X-Accept", "application/json");
			},
			// success: function(data) {
			// 	sapinnojam.config.AuthorizeURL = data.Record.Streamwork.AuthorizeURL;
			// 	sapinnojam.config.BaseURL = data.Record.Streamwork.BaseURL;
			// 	sapinnojam.config.RequestTokenURL = data.Record.Streamwork.RequestTokenURL;
			// 	sapinnojam.config.ConsumerSecret = data.Record.Streamwork.ConsumerSecret;
			// 	sapinnojam.config.ConsumerKey = data.Record.Streamwork.ConsumerKey;
			// 	sapinnojam.config.AccessTokenURL = data.Record.Streamwork.AccessTokenURL;
			// 	
			// 	console.log(("AuthorizeURL before returning from sucesss fn() :" + sapinnojam.config.AuthorizeURL));
			// },
			success: success,
			error: function(errorThrown) {
				// TODO: add proper error handling
				alert(errorThrown);
			}
		});
	};

	return {
		// these functions and properties are public
		loadStreamworkConfig: loadStreamworkConfig
	};
} ();
