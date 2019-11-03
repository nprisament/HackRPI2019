function getDanger(alerts, lat, long, after) {
	dangers = [];
	for (let i = 1; i <= 12; i++)
		dangers.push([0,i]);
	alerts.forEach((a) => {
		for (let i = 0; i < a.categories.length; i++)
			if (!(dangers[a.categories[i].category_cd][0] > Infinity))
				dangers[a.categories[i].category_cd][0] += getWeight(a, lat, long, i);
	})
	dangers.sort((a, b) => a[0]-b[0]);
	after(dangers);
}