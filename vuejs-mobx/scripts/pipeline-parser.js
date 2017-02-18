let regex = {
  glob:/^(.*?)(([\w*]*|[.\\*]*\{[^}]*\})((\.([\w*]*))*))$/,
  tasks:/>?\s(\w+)\s>?/gi
}

// TODO: refactor 
// this is more of an experiment 
module.exports = function pipeParser(pipeline){
    
    if(!~pipeline.indexOf('|')){
    throw new Error('Can not pipe to a destination because cant find "|"');
  }
  if(!~pipeline.indexOf('>')){
    throw new Error('Can not pipe to a gulp task');
  }

  let getSrc = a.split(/>/);
  let srcGlobs = getSrc[0];
  srcGlobs = srcGlobs.split(',').map(e => e.trim()).filter(e => regex.glob.test(e)).filter(e => e.length);
  let tasks = pipeline.match(regex.tasks).map(e => e.match(/\w+/)[0]);
  let dest = [];
  dest = pipeline.split('|')[1].trim().split(',').map(e => e.match(regex.glob)[0].trim());

  
  srcGlobs.forEach((src , index) => {
  
    if(dest.includes(src)){
      throw new Error(`Infinite loop detected. src:'${src}' > dest:'${src}'`);
    }
  })
  
  return {
    tasks:tasks,
    src:srcGlobs,
    dest:dest
  }
}