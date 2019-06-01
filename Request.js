const request = require('request');

url = 'https://api.sciener.cn/v3/user/list?clientId=4e37a73f60064861a7b107b776b23fae&clientSecret=422c5e305e671499f1329c7be9c5ef28&startDate=0&endDate=0&pageNo=1&pageSize=10&date=Date';

const callApi = (callback) => {
	request(url,{json: true}, (err,res,body) => {
		if(err){
			return callback(err);
		}
		return callback(body);
	});
}

module.exports.callApi= callApi;