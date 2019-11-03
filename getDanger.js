function getDanger(alerts, lat, long, after) {
	dangers = [];
	for (let i = 1; i <= 12; i++)
		dangers.append([0,i]);
	alerts.forEach((a) => {
		if (!dangers[a.categories.category_cd][0] > Infinity)
			dangers[a.categories.category_cd][0] += getWeight(a, lat, long);
	})
	dangers.sort((a, b) => a[0]-b[0]);
	after(dangers);
}