let bs = require("browser-sync").create();
var config = require("./app/config");


function mid(req , res , done){
    console.log(done)
}

bs.init({
    port:config.proxy.port,
    proxy:`http://${config.proxy.target}:${config.server.port}`
});


