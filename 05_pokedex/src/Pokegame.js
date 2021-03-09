import React from 'react';
import Pokedex from './Pokedex.js';

class Pokegame extends React.Component {

    render() {

        return (
            <div>
                <Pokedex />        
                <Pokedex />
            </div>
        );
    }
}

export default Pokegame;