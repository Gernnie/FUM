var api = {
	//endpoint:  "http://fumoddjobs-dev.threepointturn.com/api/",
	endpoint:  "http://localhost:6234/api/",
	authToken: null,

	callApi:function (action, method, data){
		if (api.authToken == null){
			return $.ajax({
				url: api.endpoint + action,
				method: method,
				data: data
			});
		} else {
			return $.ajax({
				url: api.endpoint + action,
				method: method,
				data: data,
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


