function getDanger(alerts, lat, long, after) {
	console.log(alerts);
	const dangers = [];
	const counts = [];
	for (let i = 1; i <= 12; i++)
		dangers.push([0.0,i]);
	for (let i = 1; i <= 12; i++)
		counts.push(1);
	for (let i = 0; i < alerts.length; i++) {
		for (let j = 0; j < alerts[i].categories.length; j++) {
			if (!(dangers[alerts[i].categories[j].category_cd - 1][0] > Infinity))
				dangers[alerts[i].categories[j].category_cd - 1][0] += getWeight(alerts[i], lat, long, j);
			counts[alerts[i].categories[j].category_cd - 1]++;
		}
			
	}
	for (let i = 0; i < dangers.length; i++)
		if (counts[i]) dangers[i][0] *= 10 / (4 * counts[i] - 1);
	dangers.sort((a, b) => b[0]-a[0]);
	for (let i = 0; i < dangers.length; i++)
		if (dangers[i][0]) dangers[i][0] = dangers[i][0].toFixed(4);
	after(dangers);
}
