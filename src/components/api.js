var api = {
	getRovers(){
	var url = `http://10.10.10.3/takunda/android/slim/api/albums`;
	return fetch(url).then((res)=>res.json());
	}
};

module.exports = api;