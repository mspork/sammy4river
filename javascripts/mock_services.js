//  See http://enterprisejquery.com/2010/07/mock-your-ajax-requests-with-mockjax-for-rapid-development/
$.mockjax({
    url: "/api/rest/" + sapinnojam.constants.RIVER_ACCOUNT + "/" + sapinnojam.constants.CONFIGURATION_APP + "/default",
    responseTime: 750,
    status: 200,    // OK response
    responseText:
    {
        "Record": {
            "Streamwork": {
                "AuthorizeURL": "https://staging.streamwork.com/oauth/authorize",
                "BaseURL": "https://staging.streamwork.com",
                "RequestTokenURL": "https://staging.streamwork.com/oauth/request_token",
                "ConsumerSecret": "CDctP5mpFfFjEZFSeMZ0DJRFoAxodFSUSVP58Nho",
                "ConsumerKey": "EAXXAqe54smtjTlsa0vN",
                "AccessTokenURL": "https://staging.streamwork.com/oauth/access_token"
            },
            "Attachments": "",
            "Properties": {
                "Name": "default",
                "RevisionID": "b7010d76-4416-11e0-f450-5af28b5c91b6",
                "AppRevisionID": "b7010d73-4416-11e0-f450-5af28b5c91b6",
                "Changed": false,
                "ModifiedBy": "murray.spork@sap.com",
                "ModificationDate": "2011-03-01T20:04:34.458Z",
                "CreatedBy": "murray.spork@sap.com",
                "ID": "default",
                "Namespace": "i_CoCoTeam",
                "CreationDate": "2011-03-01T20:01:42.130Z",
                "Version": ""
            }
        }
    }


});

