const  http = require('http');
 
const server = http.createServer((req , res) => {
    if (req.url === '/' )
    {
    res.write('why are u there') ; 
    }
    if(req.url === '/fuk') 
    {
        res.write('WHAT !!!');
    }
    res.end();


})
server.listen(5000);
