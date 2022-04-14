var http = require('http');
const server = http.createServer((req, res) => {
    console.log("came");
    if(req.url ==='/users') {
        res.write(JSON.stringify({
            name: 'Vidhya',
            age: 27
        }))
    }else if(req.url ==='/posts'){
        res.write(JSON.stringify({
            name: 'Sagar',
            age: 27
    }))
} else{
    res.write("{}")
    }

    res.end();
})
server.listen(3000);