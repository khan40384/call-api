const https = require('https');

url='https://api.sciener.cn/v3/user/list?clientId=4e37a73f60064861a7b107b776b23fae&clientSecret=422c5e305e671499f1329c7be9c5ef28&startDate=0&endDate=0&pageNo=1&pageSize=10&date=Date';

const callApi = (callback) =>{
	https.get(url,(resp)=>{
		let data='';
		resp.on('data',(chunk)=>{
			data += chunk;
		});
		resp.on('end',()=>{
         return callback(data);
		});
	}).on("error",(err)=>{
		console.log("error:" + err.message);
	});
}

module.exports.callApi = callApi;