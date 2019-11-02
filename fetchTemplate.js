fetch('https://api.weather.com/v3/alerts/headlines', {
	method: 'GET',
	body: JSON.stringify({
		geocode: '44,-117',
		format: 'json',
		language 'en-US',
		apiKey: '9d2908c81003444ea908c81003b44ed4'
	})
}).then((response) => {
	// do something awesome that makes the world a better place
	console.log(response);
}).catch((error) => {

});
