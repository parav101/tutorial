const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Welcome to homepage')
        res.end()
    }
    else if(req.url === '/about'){
        res.write('Welcome to about page')
        res.end()
    }
    else{
        res.end(`<h1>Oops<h1>
        <a href="/">back to homepage</a>
       
        `)

    }
    
})

                 
server.listen(5000);