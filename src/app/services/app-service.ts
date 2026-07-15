import { httpResource } from '@angular/common/http';
import { Service, signal } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Service()
export class AppService {
    pokemonName = signal('pikachu')
    pokemon = httpResource<Pokemon>(() =>  ` https://pokeapi.co/api/v2/pokemon/${this.pokemonName()}`)

    

}
