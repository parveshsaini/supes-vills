/* eslint-disable no-unused-vars */
import { Component } from "react";

import CardList  from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import Card from "./components/card/card.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
    console.log("constructor");
  }

  //mounting is the first time component get placed onto the dom. only happens once in comp's life. code inside it run as soon as component gets mount
  componentDidMount() {
    console.log("mount");

    //API call
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (event) => {

    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  }


  render() {
    console.log("render");

    const {searchField, monsters} = this.state ;  // doing this we dont have to put this.state before searchField and Monsters variables again and again
    const {onSearchChange} = this ; //we dont have to put this. before every onSearchChange
    
    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField); //include() method returns bool
    });

    return (
      <div className="App">
        <h1 className="app-title">Supes VS Vills</h1>

        <SearchBox onChangeHandler={onSearchChange} placeholder='Search Monster' className='Monster Search Box' />

        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
