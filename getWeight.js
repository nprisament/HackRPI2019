function getWeight(alert, lat, lon, i){
    let c;
    switch(alert.categories[i].category_cd){
        case 1:
            c = .1;
            break;
        case 2:
            c =.35;
            break;
        case 3:
            c = .9;
            break;
        case 4:
            c = 1;
            break;
        case 5:
            c = .7;
            break;
        case 6:
            c = .5;
            break;
        case 7:
            c = .4;
            break;
        case 8:
            c = .3;
            break;
        case 9:
            c = .9;
            break;
        case 10:
            c = .9;
            break;
        case 11:
            c = .1;
            break;
        case 12:
            c = 1;
            break;
    }
    let r = Math.sqrt(Math.pow(lat-alert.lat,2)+Math.pow(lon-alert.lon,2));
    let sev = alert.severity_cd;
    let urg = alert.urgency_cd;
    let resp = alert.response_types[i].response_type_cd;
    let floo = alert.flood?alert.flood.fld_severity_cd:0;
    floo=parseInt(floo*(floo == 1 || floo == 2 || floo == 3));
    if(isNaN(floo)) floo = 0;
    return Math.pow(2,-c*r)*((5-sev)+(5-urg)+(9-resp)/2+(floo)*4/3)/(3+(floo != 0));
}