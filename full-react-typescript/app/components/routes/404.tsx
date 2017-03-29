import * as React from 'react';
const {Component} = React;

interface Iprops {}
interface Istate {}

export default class NotFound extends Component<Iprops, Istate>{
    render(){
        return (
            <div>
              <h1>Not found</h1>
            </div>    
        )
    }
}