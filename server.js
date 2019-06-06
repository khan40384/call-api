

const htt = require('http');
const htts = require('https');
htts.post = require('https-post');

const port = process.env.PORT || 3000;

htt.createServer('request',(req,res) =>{
	console.log(req.url);

	

var params=function(req){
  let q=req.url.split('?'),result={};
  if(q.length>=2){
      q[1].split('&').forEach((item)=>{
           try {
             result[item.split('=')[0]]=item.split('=')[1];
           } catch (e) {
             result[item.split('=')[0]]='';
           }
      })
  }
  return result;
}

req.params=params(req);


console.log(req.params.username);
console.log(req.params.grant_type);
  if(req.method==='POST'){
	
	htts.post(`https://api.sciener.cn${req.url}`,{
		client_id: '4e37a73f60064861a7b107b776b23fae',
		client_secret: '422c5e305e671499f1329c7be9c5ef28',
		grant_type: 'password',

		username: '+919560508945', 
		password: 'a6c54750414a33f0bd9b99d12cb74eda',
		redirect_uri: 'smartlock.co.in'
	}, function(resp){
	resp.setEncoding('utf8');
	let data='';
		resp.on('data',(chunk)=>{
			data += chunk;
			console.log(data);
			res.write(data);
			res.end();
		});
		resp.on('end',()=>{
        
		});
	}).on("error",(err)=>{
		console.log("error:" + err.message);
		res.write(err.message);
		res.end();
	});
	
    }
    if(req.method==='GET')
    {
	htts.get(`https://api.sciener.cn${req.url}`,(resp)=>{
		let data='';
		resp.on('data',(chunk)=>{
			data += chunk;
			console.log(data);
			res.write(data);
			res.end();
		});
		resp.on('end',()=>{
        
		});
	}).on("error",(err)=>{
		console.log("error:" + err.message);
		res.write(err.message);
		res.end();

	});

	



}

}).listen(port);



console.log(`Listening on port ${port}...`);







