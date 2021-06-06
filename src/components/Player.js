import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import { Consumer } from './Context';

class Player extends PureComponent {

  static propTypes = {
    // changeScore: PropTypes.func.isRequired,
    // removePlayer: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    // score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired
  };

  render() {
    // 2:28
    const { 
      // name,
      // id,
      // score,
      index
      // , removePlayer
      // , changeScore
    } = this.props;

    

    return (
      <div className="player">
        <Consumer>
          {/* { context => ( */}
          { ({ actions, players }) => {
            const { name, id } = players[index];
            return (
            <span className="player-name">
              <button className="remove-player" onClick={() => actions.removePlayer(id)}>✖</button>
              { name }
            </span>        
          )}}
        </Consumer>
        <Counter 
          // score={score}
          index={index}
          // changeScore={changeScore} 
        />
      </div>
    );
  }
}

export default Player;