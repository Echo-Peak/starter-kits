const fs = require("fs");
const config = require("../app/config");
const path = require("path");
const copydir = require("copy-dir");


fs.readdir(config.paths.static , function(err , dirlist){
    if(!err){
        let dir = dirlist.filter(e => e.match(/^\w+$/));
        let dest = `${config.paths.dist}/server/static`;
        
            checkDistFolder(config.paths.dist);
            copydir.sync( `${config.paths.static}` , dest)

    }
});

function checkDistFolder(dest){
    
    let result = fs.existsSync(dest);
    if(!result){
        fs.mkdirSync(dest);
        fs.mkdirSync(`${dest}/server`);
        fs.mkdirSync(`${dest}/server/static`);
    }
    
}
