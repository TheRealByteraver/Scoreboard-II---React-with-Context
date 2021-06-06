import React from 'react';
// import PropTypes from 'prop-types';
import Player from './Player';
import { Consumer } from './Context';

const PlayerList = (/* props */) => {
  return (
    <Consumer>
      {/* { context => { */}
      { ({ players }) => {
        return (
          <React.Fragment>
            {players.map( (player, index) => // was context.players.map(...) before
              <Player 
                // {...player}
                key={player.id.toString()} 
                index={index}
                // changeScore={props.changeScore}
                // removePlayer={props.removePlayer}           
              />
            )}
          </React.Fragment>
        );
      }}
    </Consumer>
  );
}

PlayerList.propTypes = {
  // players: PropTypes.arrayOf(PropTypes.object),
  // changeScore: PropTypes.func.isRequired,
  // removePlayer: PropTypes.func.isRequired,
};

export default PlayerList;