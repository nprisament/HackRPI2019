getDanger = () => new Promise(function(resolve, reject) {
	resolve({danger: 5}); 
});




parseColor = (danger) => {return 'red'};

updatePage = (report) => {
	$('#danger-level').text(report.danger).css('color', parseColor(report.danger));
}

locationError = () => {

};

getDanger().then(updatePage).catch(locationError);
