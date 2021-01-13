import { React, Component } from 'react';
import { CardList } from './components/card-list/card-list';
import { Search } from './components/search/search';

import './App.css';
class App extends Component {
  
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState( { monsters: users }))
  }

  handleChange(e) {
    this.setState({searchField: e.target.value});
  }
  
  render() {
    const { monsters, searchField } = this.state;
    const modifiedMonsters = searchField ? monsters.filter(monster => monster.name.toLowerCase().includes(searchField)) : monsters;
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Search placeholder="Search Monsters" handleChange={this.handleChange}/>
        <CardList 
          monsters={modifiedMonsters}
        />
      </div>
    );
  }
}
export default App;
