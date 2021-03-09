import React from 'react';
import Pokecard from './Pokecard';

function randomNumber() {
    return Math.floor((Math.random() * 8));
}

class Pokedex extends React.Component {

    render() {

        const pokemon = [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]

          let card1 = pokemon[randomNumber()];
          let card2 = pokemon[randomNumber()];
          let card3 = pokemon[randomNumber()];
          let card4 = pokemon[randomNumber()];

          this.total = card1.base_experience 
            + card2.base_experience 
            + card3.base_experience 
            + card4.base_experience;

        return (

            <div>
                {//<Pokecard id={pokemon[1].id} name={pokemon[1].name} type={pokemon[1].type} base_experience={pokemon[1].base_experience} />
                }
                <Pokecard id={card1.id} name={card1.name} type={card1.type} base_experience={card1.base_experience} />
                <Pokecard id={card2.id} name={card2.name} type={card2.type} base_experience={card2.base_experience} />
                <Pokecard id={card3.id} name={card3.name} type={card3.type} base_experience={card3.base_experience} />
                <Pokecard id={card4.id} name={card4.name} type={card4.type} base_experience={card4.base_experience} />
                <h1>Total Experience: {card1.base_experience
                    + card2.base_experience
                    + card3.base_experience
                    + card4.base_experience}</h1>
            </div>
        );
    }
}

export default Pokedex;