import './App.css';
import React from 'react';
import Recipe from './components/Recipe'
import Navbar from './components/navbar';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: []
    }
    this.getRecipes()
  }

  getRecipes() {
    fetch('http://localhost:8080/recipes')
      .then(response => response.json())
      .then(data => this.setState({ recipes: data }));
  }

  render() {
    return (
      <div>
        <Navbar />
        {this.state.recipes.map((recipe, index) => (
          <Recipe recipe={recipe} />
        ))}
      </div>
    )
  }
}

export default App