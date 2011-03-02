(function($) {

	var app = $.sammy(function() {
		this.use('Template');
		
		this.element_selector = '#main';

		// Create main index landing page
		this.get('#/', function(context) {
			context.log('Yo yo yo');	
			
			var url = "/api/rest/" + sapinnojam.constants.RIVER_ACCOUNT + "/" + sapinnojam.constants.CONFIGURATION_APP + "/default";
			jQuery.ajax({
				type: 'GET',
				url: url,
				dataType: "json",
				context: context,
				beforeSend: function(xhr) {
					xhr.setRequestHeader("X-Accept", "application/json");
				},
				success: function(data) {
					sapinnojam.config.AuthorizeURL = data.Record.Streamwork.AuthorizeURL;
					sapinnojam.config.BaseURL = data.Record.Streamwork.BaseURL;
					sapinnojam.config.RequestTokenURL = data.Record.Streamwork.RequestTokenURL;
					sapinnojam.config.ConsumerSecret = data.Record.Streamwork.ConsumerSecret;
					sapinnojam.config.ConsumerKey = data.Record.Streamwork.ConsumerKey;
					sapinnojam.config.AccessTokenURL = data.Record.Streamwork.AccessTokenURL;				
					
					$.mockjaxClear();
			        context.render('templates/streamwork_config.template', {config: sapinnojam.config})
		               .appendTo(context.$element());						
				},
				error: function(errorThrown) {
					// TODO: add proper error handling
					alert(errorThrown);
				}
			});
		});

	});
	
	$(function() {
      app.run('#/');
    });
    

})(jQuery);
