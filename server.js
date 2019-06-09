const express = require('express');

const cors = require('cors');
const https = require('https');
 https.post = require('https-post');
const http = require('http');
const bodyParser = require('body-parser');
const axios = require('axios');
const querystring = require('querystring'); 
const request = require('request');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));


app.use(cors());



const port = process.env.PORT || 3000;

app.get('/v3/user/list', (req,res) => {
	console.log(req.url);
	console.log(req.params);
	https.get(`https://api.sciener.cn${req.url}`,(resp)=>{
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
})




//this method is not working 
/*app.post('/oauth2/token',(req,res) => {
  
  
	var client_ids= req.query.client_id;
    var client_secrets = req.query.client_secret;
    var grant_types = req.query.grant_type;
    var usernames = req.query.username;
    var passwords = req.query.password;
    var redirect_uris = req.query.redirect_uri;
 	
console.log(grant_types);
console.log(passwords);
console.log(client_ids);
console.log(client_secrets); 
console.log(redirect_uris);
console.log(usernames);



	var urlOut =`https://api.sciener.cn${req.url}`;
	console.log(urlOut);
    https.post(urlOut,{
		client_id: client_ids,
		client_secret: client_secrets,
		grant_type: grant_types,
		username: usernames, 
		password: passwords,
		redirect_uri: redirect_uris
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


})*/



//this method is working 
app.post('/oauth2/token',(req,res) => {
  
  
	var client_ids= req.query.client_id;
    var client_secrets = req.query.client_secret;
    var grant_types = req.query.grant_type;
    var usernames = req.query.username;
    var passwords = req.query.password;
    var redirect_uris = req.query.redirect_uri;
 	
console.log(grant_types);
console.log(passwords);
console.log(client_ids);
console.log(client_secrets); 
console.log(redirect_uris);
console.log(usernames);



	var urlOut =`https://api.sciener.cn${req.url}`;
	console.log(urlOut);
    https.post(urlOut,{
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


})



app.listen(port, ()=>{
	console.log(`app is running at port ${port}`);
})





