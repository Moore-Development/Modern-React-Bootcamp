import React from 'react';
import './card-style.css';

class Pokecard extends React.Component {

    render() {
        
        const {id, name, type, base_experience} = this.props;

        return (

            <div className="pokecard">
                <h2>{name} </h2>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
                <p>{type}</p>
                <p>{base_experience}</p>
            </div>
        );
    }
}

export default Pokecard;