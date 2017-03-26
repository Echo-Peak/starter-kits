import React from 'react';
let {Component} = React;


let style = {}

class Layout extends Component{
  static init(){
    if(typeof window !== "undefined"){

      this.prototype.window = true;
    }
  }
  constructor(props){
    super();
    this.state = {}
  }
  showGists(){

  }
  componentDidMount(){}
  render(){
    return (<div data-component='Layout'>

        <button>Latest Gists</button>

  </div>)
  }
}
export default !Layout.init() && Layout
