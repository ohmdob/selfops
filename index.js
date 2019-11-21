require('dotenv').config()
const { exec } = require('child_process');
var http = require('http');

http.createServer(function (req, res) {
  let resp = '-'
  if(process.env.API_KEY && req.headers['API_KEY'] == process.env.API_KEY) {
	exec('./deploy.sh', (err, stdout, stderr) => {
	  if (err) {
		resp = `Error: ${err}`;
	  }
	  resp = `Success: ${stdout}`;
	  res.write(resp); 
	  res.end(); 
	});
  }else{
	res.write(resp); 
	res.end(); 
  }
}).listen(8080); 
console.log('Selfops Start!')