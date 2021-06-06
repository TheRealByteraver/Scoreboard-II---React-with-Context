import React /*, { Component }*/ from 'react';
import Header from './Header';
import PlayerList from './PlayerList';
import AddPlayerForm from './AddPlayerForm';
// import {ScoreboardContext, Provider} from './Context';


// class App extends Component {
//   render() {
const App = () => {  
    //console.log(ScoreboardContext);
    return (
      <div className="scoreboard">
        <Header 
          // players={this.state.players} 
        />
        <PlayerList 
          // players={this.state.players} 
          // changeScore={this.handleScoreChange}
          // removePlayer={this.handleRemovePlayer}   
        />
        <AddPlayerForm 
          // addPlayer={this.handleAddPlayer} 
        />
      </div>
    );
  }
// }

export default App;
