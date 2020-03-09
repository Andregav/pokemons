import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Data } from './data_type';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

	data: Data[];

	private webUrl: string = 'https://pokeapi.co/api/v2/pokemon/';

  	constructor(
  		private http: HttpClient
  	) { }

  	getData(limit: number, offset: number): Observable<Data[]> {
  		return this.http.get<Data[]>(`${this.webUrl}?limit=${limit}&offset=${offset}`);
	  }

	  getPokemons(id: number): Observable<Data[]> {
  		return this.http.get<Data[]>(`${this.webUrl}${id}`);
	  }

    getPokemon(link: string):Observable<Data[]> {
      return this.http.get<Data[]>(`${this.webUrl}${link}`);
    }

    getEvolutions(link: string):Observable<Data[]> {
      return this.http.get<Data[]>(`${link}`);
    }
}	

