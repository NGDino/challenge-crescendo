import logo from './logo.svg';
import './App.css';
import AllRecipes from './components/AllRecipes';
import SingleRecipe from './components/SingleRecipe';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={AllRecipes} exact/>
        <Route path="/recipe/:id" component={SingleRecipe}/>
      </Router>

    </div>
  );
}

export default App;
