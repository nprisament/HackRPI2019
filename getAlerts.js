
//https://api.weather.com/v1/country/CA/alerts.json?language=en-US&apiKey=9d2908c81003444ea908c81003b44ed4
// do something awesome that makes the world a better place

module.export = function getInfo(){
    $.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?&fqnc=', function(data) {
        console.log(data);
        fetch('https://cors-anywhere.herokuapp.com/'+`https://api.weather.com/v1/country/${data.geobytesinternet}/alerts.json?language=en-US&apiKey=9d2908c81003444ea908c81003b44ed4`, {
            method: 'GET'
        }).then((response) => {
            response.json()
            .then((res)=> {
                console.log(res);
            }).catch((err)=> {
                console.log(err);
            })
        }).catch((err) => {
            console.log(err);
        });
    });
}
