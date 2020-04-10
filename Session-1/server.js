const http = require('http');

//create a server object:
http.createServer((req, res) => {
  if(req.url === '/hello' && req.method === 'GET'){
    res.write('<p><b>Hello World!</b></p>'); //write a response to the client
    res.end(); //end the response
  } else if (req.url === '/bye' && req.method === 'HEAD'){
    req.
    res.write('<p><b>Bye!</b></p>'); //write a response to the client
    res.end(); //end the response
  }
  else {
    res.write('<p><b>404 - Notfound</b></p>'); //write a response to the client
    res.end(); //end the response
  }

}).listen(8080); //the server object listens on port 8080