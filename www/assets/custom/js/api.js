var api = {
	endpoint:  "http://fumoddjobs-dev.threepointturn.com/api/",
	//endpoint:  "http://localhost:6234/api/",
	authToken: null,

	callApi:function (action, method, data){
		if (api.authToken == null){
			return $.ajax({
				url: api.endpoint + action,
				method: method,
				data: JSON.stringify(data),
				contentType: 'application/json'
			});
		} else {
			return $.ajax({
				url: api.endpoint + action,
				method: method,
				data: data,
				dataType: 'json',
				contentType: 'application/json',
				headers: {
				    'Authorization': 'Bearer ' + api.getAuthToken()
			  	}
			});
		}
		
	},

	setAuthToken: function (token){
		api.authToken = token;
	},

	getAuthToken: function(){
		return api.authToken;
	}
}


