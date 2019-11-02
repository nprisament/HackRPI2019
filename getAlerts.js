
//https://api.weather.com/v1/country/CA/alerts.json?language=en-US&apiKey=9d2908c81003444ea908c81003b44ed4

function getInfo(){
    $.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?', function(data) {
    console.log(JSON.stringify(data, null, 2));
    });
    return null
}

var countryCode = getInfo();
if(1){
    fetch('https://cors-anywhere.herokuapp.com/'+`https://api.weather.com/v1/country/US/alerts.json?language=en-US&apiKey=9d2908c81003444ea908c81003b44ed4`, {
        method: 'GET'}).then((response) => {
	    // do something awesome that makes the world a better place
        response.json().then((res)=> {
            console.log(res);
        }).catch((err)=> {
            console.log(err);
        })
    }).catch((error) => {

    });
}

else{
    console.log("Unable to determine location!");
}