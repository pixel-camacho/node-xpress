var http = require('http');
var {countries} =  require('countries-list');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer( function(request, response){

    var parsed = url.parse(request.url);
    var pathname = parsed.pathname;
    var query = querystring.parse(parsed.query);
    console.log(query);

if(pathname == '/')
{
    response.writeHead(200,{'Content-Type': 'text/html'});
    response.write('<html><head><title>Home</title></head><body><h1>Bienvenido</h1></body></html>');
    response.end();
}else if(pathname == '/exit')
{
    response.writeHead(200,{'Content-Type': 'text/html'});
    response.write('<html><head><title>Home</title></head><body><h1>Adios Usuario...</h1></body></html>');
    response.end();
}else if(pathname == '/country')
{
    response.writeHead(200,{'Content-Type': 'application/json'});
    response.write(JSON.stringify(countries[query.code]));
    response.end();
}else
{
    response.writeHead(404,{'Content-Type': 'text/html'});
    response.write('<html><head><title>Home</title></head><body><h1>NOT FOUNT </h1></body></html>');
    response.end();
}
    
});
server.listen(4000);
console.log('Server load');

