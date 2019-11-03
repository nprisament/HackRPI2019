import getDanger from './getDanger';

$('#dangers').hide();
$('#loading').show();

parseColor = (danger) => {return 'red'};

updatePage = (weights) => {
	for (let i = 0; i < weights.length; i++) {
		eventType = '';
		switch(weights[i][1]) {
			
		}
		$('#dangerType-' + i).text(eventType);		
		$('#danger-' + i).text(weights[i][0]).css('color', parseColor(weights[i][0]));
	}
	$('#loading').hide();
	$('#dangers').show();
}

locationError = () => {

};

getDanger().then(updatePage).catch(locationError);
