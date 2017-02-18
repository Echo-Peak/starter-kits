let child_process = require('child_process');
let uuid = require('uuid');
let socketIOClient = require('socket.io-client');


// make a facade abstation for scripts that use binarays like webpack , mocha ...etc

let running = {};
module.exports = function(config){
    let Processes = Object.keys(config.processes);
    let socket = socketIOClient.connect(`http://localhost:${config.system.port}`);
    let options = {
        silent:true,
        stdio:'pipe',
        cwd: process.cwd()
    }
    
    Processes.forEach((p , i) => {
        let name = Processes[i];
         p = config.processes[p];
        console.log(p.script , p.enable);
        let child;
        if(p.enable){
            switch(process.platform){
                case 'win32':{
                    child = child_process.exec(`start cmd /c node "${p.script}"`, options);
                    
                    if(config.system.allowChildOutput){
                        child.stdout.on('data' , (buffer)=>{
                            console.log(`[${name}]`.cyan.bold);
                            console.log(buffer.toString('ascii'));
                        });
                        child.stderr.on('data' , (buffer)=>{
                            console.log(`[${name}]`.red.bold);
                            console.log(buffer.toString('ascii'));
                        });
                    }
                running[name] = child;
                socket.emit('process-connected',{name:name, pid:child.pid});
                };break;
                case 'darwin':{

                };break;
                case 'linux':{

                }
            }
        }
    });

}