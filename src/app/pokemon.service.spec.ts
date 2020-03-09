import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PokemonService } from './pokemon.service';

import { asyncData, asyncError } from './../testing/async-observable-helpers';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

describe('PokemonService', () => {

  beforeEach(() => TestBed.configureTestingModule({
  	imports: [HttpClientTestingModule], 
  	 providers: [PokemonService]
  }));

  it('should be created', () => {
    const service: PokemonService = TestBed.get(PokemonService);
    expect(service).toBeTruthy();
  });

  it('should have getData function', () => {
        const service: PokemonService = TestBed.get(PokemonService);
        expect(service.getData).toBeTruthy();
   });
});

describe ('PokemonService (with spies)', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let pokemonService: PokemonService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    pokemonService = new PokemonService(<any> httpClientSpy);
  });

  it('should return expected pokemons (HttpClient called once)', () => {
    const expectedHeroes: any = {};

    httpClientSpy.get.and.returnValue(asyncData(expectedHeroes));

    pokemonService.getPokemons(1).subscribe(
      pokemons => expect(pokemons).toEqual(expectedHeroes, 'expected pokemons'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));

    pokemonService.getPokemons(1).subscribe(
      pokemons => fail('expected an error, not pokemons'),
      error  => expect(error.message).toContain('test 404 error')
    );
  });
});