import React,{Component} from 'react';
import Cardlist from '../Component/Cardlist';
//import {robots} from './robots';
import Scroll from '../Component/Scroll';
import Searchbox from '../Component/Searchbox';
import './App.css'
class App extends Component {
    constructor(){
        super()
        this.state={
          robots: [],
          searchfield: ''
        }
       
    }
    componentDidMount(){
           fetch('https://jsonplaceholder.typicode.com/users')
           .then(response=> response.json())
           .then(users => this.setState({ robots: users}));
           }


    onsearchchange=(event)=> {
        this.setState({searchfield: event.target.value});
    }
    render(){
        const FilteredRobots =this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
    return (
        <div className='tc'>
        <h1 className='f1'> Robo friends</h1>
        <Searchbox searchChange={this.onsearchchange}/>
       
       <Scroll>
       <Cardlist robots={FilteredRobots}/>
       </Scroll>
       </div>

    );
    }
}

export default App;