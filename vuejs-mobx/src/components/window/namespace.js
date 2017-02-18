export let namespace = {
  postLoadQue:[],
  beforeMountQue:[],
  mounted:false,
  mount(windowName){
    this.beforeMountQue.forEach(fn => {
        if(typeof fn === 'function'){
          fn.fn.call(this, ...fn.argsArray);
        }
      });
    if(typeof windowName === 'string' || !windowName.length){
      throw new Error('faild to mount');
    }
    let x = new Function(`return new class ${windowName}{}`);
    x = Object.assign(x() , this);
    window[windowName] = x;

    document.addEventListene('contentloaded' , ()=>{
      this.postLoadQue.forEach(fn => {
        if(typeof fn === 'function'){
          fn.fn.call(this, ...fn.argsArray);
        }
      });
      this.mounted = true;
      this.createApp(windowName)
    });
  },
  onload(fn, argsArray = []){
    if(typeof fn !== 'function'){
      throw new Error('Can only pass a function to onload')
    }
    if(this.mounted){
      fn.call(this, ...argsArray);
    }else{
      this.postLoadQue.push({fn , argsArray});
    }
    return this.onload;
  },
  beforeMount(fn, argsArray = []){
    if(typeof fn !== 'function'){
      throw new Error('Can only pass a function to onload')
    }
    
    this.postLoadQue.push({fn , argsArray});
    return this.onload;
  },
  createApp(appName){
    let targetElm = document.querySelector(`#${appName}`);
    if(!targetElm){
      let newElm = document.createElement('div');
      newElm.setAttribute('id' , appName);
      document.body.insertBefore(newElm , document.body.firstChild);
    }
    this.app = new Vue({
      el:appName,
      data:{
        message:`${appName} has mounted succsesfully!`
      }
    })
  }

}