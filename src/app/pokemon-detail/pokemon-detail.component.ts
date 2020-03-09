import { Component, OnInit, Input} from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Data } from '../data_type';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  private pokemon;
  private name;
  private abilities;
  private types;
  private stats;
  private moves;
  private front_default;
  private id;
  private order;
  private type;
  private species;
  private chain;
  private linkSpecies;
  private secondEvol;
  private thirddEvol;
  private getEvolImg;
  private firstEvolImg;
  private firstEvolName;
  private getSecondEvolImg;
  private secondEvolImg;
  private secondEvolName;
  private getThirdEvolImg;
  private thirdEvolImg;
  private thirdEvolName;


  constructor(
  		private route: ActivatedRoute,
      private pokemonService: PokemonService,
      private location: Location
  	) { }

  ngOnInit() {
    this.getPockemon();
  }

  ngAfterViewChecked(){
    this.getTotalStats();
  }

  goBack(): void {
   	this.location.back();      
  }

  getPockemon(): void {
    const link = this.route.snapshot.paramMap.get('list.name');
    this.pokemonService.getPokemon(link).subscribe(pokemon => {
      this.pokemon = pokemon; 
      this.abilities = this.pokemon.abilities;
      this.types = this.pokemon.types;
      this.stats = this.pokemon.stats;
      this.moves = this.pokemon.moves;
      this.name = this.pokemon.name;
      this.id = this.pokemon.id;
      this.order = this.pokemon.order;
      this.front_default = this.pokemon.sprites['front_default'];
      this.linkSpecies = this.pokemon.species.url;  
      this.pokemonService.getEvolutions(this.linkSpecies).subscribe(species => {
        this.species = species;
        const linkEvolutionChain = this.species.evolution_chain.url;
        this.pokemonService.getEvolutions(linkEvolutionChain).subscribe(chain => {
          this.chain = chain;
          this.firstEvolName = this.chain.chain.species.name;
            this.pokemonService.getPokemon(this.chain.chain.species.name).subscribe(getEvolImg => {
              this.getEvolImg = getEvolImg;
              this.firstEvolImg = this.getEvolImg.sprites['front_default'];
            });
          const result = this.chain.chain.evolves_to.find(item => {
              item.species == "https";
                this.secondEvol = item.species;
                this.secondEvolName = this.secondEvol.name;
                this.pokemonService.getPokemon(this.secondEvol.name).subscribe(getSecondEvolImg => {
                    this.getSecondEvolImg = getSecondEvolImg;
                    this.secondEvolImg = this.getSecondEvolImg.sprites['front_default'];
                  }
                );
              }                    
            );
          const result2 = this.chain.chain.evolves_to.find(item2 => {
              item2.evolves_to.find(item3 => {
                item3.species == "https";
                this.thirddEvol = item3.species;
                this.thirdEvolName = this.thirddEvol.name;
                 this.pokemonService.getPokemon(this.thirddEvol.name).subscribe(getThirdEvolImg => {
                   this.getThirdEvolImg = getThirdEvolImg;
                   this.thirdEvolImg = this.getThirdEvolImg.sprites['front_default'];
                 });
              }                    
            );
          });  
        }); 
      });
    }); 
  }

  getTotalStats(): void {
    const num = document.querySelectorAll('.item3 p');
    let totalStats = 0;
    for(var i = 0; i < num.length; i++) {
      totalStats += +num[i].textContent;      
    }  
    document.querySelector('.item5 p').innerHTML= "" + totalStats;
  }
}
