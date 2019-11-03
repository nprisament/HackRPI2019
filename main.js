parseColor = (danger) => {return 'red'};

updatePage = (dangers) => {
	console.log(dangers);
	for (let i = 0; i < dangers.length; i++) {
		let eventType = '';
		let eventDesc = '';
		switch(dangers[i][1]) {
			case 1:
				eventType = 'Geophysical';
				eventDesc = 'Geophysical (including landslide)';
				break;
			case 2:
				eventType = 'Meteorological';
				eventDesc = 'Meteorological (including flood)';
				break;
			case 3:
				eventType = 'Safety';
				eventDesc = 'General emergency and public safety';
				break;
			case 4:
				eventType = 'Security';
				eventDesc = 'Law enforcement, military, homeland and local/private security';
				break;
			case 5:
				eventType = 'Rescue';
				eventDesc = 'Rescue and recovery';
				break;
			case 6:
				eventType = 'Fire';
				eventDesc = 'Fire suppression and rescue';
				break;
			case 7:
				eventType = 'Health';
				eventDesc = 'Medical and public health';
				break;
			case 8:
				eventType = 'Environemental';
				eventDesc = 'Pollution and other environmental';
				break;
			case 9:
				eventType = 'Transport';
				eventDesc = 'Public and private transportation';
				break;
			case 10:
				eventType = 'Infrastructure';
				eventDesc = 'Utility, telecommunication, other non-transport infrastructure';
				break;
			case 11:
				eventType = 'CBRNE'
				eventDesc = 'Chemical, Biological, Radiological, Nuclear or High-Yield Explosive threat';
				break;
			case 12:
				eventType = 'Other';
				break;
		}
		$('#dangerDesc-' + i).text(eventDesc);		
		$('#dangerType-' + i).text(eventType);		
		$('#danger-' + i).text(dangers[i][0]).css('color', parseColor(dangers[i][0]));
	}
	$('#loading').hide();
	$('#dangers').show();
}

locationError = () => {

};

$(document).ready(function () {
	$('#dangers').hide();
	$('#loading').show();
	getAlerts(getDanger, updatePage);
});

