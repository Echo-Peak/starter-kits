import * as React from 'react';
const {Component} = React;

interface Iprops {}
interface Istate {}

export default class Home extends Component<Iprops , Istate>{
    render(){
        return <h1>Homepage</h1>
    }
}