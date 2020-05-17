import React,{Component}   from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component';
// function App() {
  
// }

class App extends Component{
  constructor(){
    super();

    this.state={
      monsters:[],
      searchField:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}))
  }

  render(){
    const {monsters,searchField} = this.state;
    // const monsters = this.state.monster
    // const searchField = this.state.monster
    const filterdMonsters = monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="search monster"
          handleChange={e=>this.setState({searchField:e.target.value})}
        />
        <CardList monsters={filterdMonsters}/>        
      </div>
    );
  }
}

export default App;
