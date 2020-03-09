import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Data } from '../data_type';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.scss']
})
export class PokemonlistComponent implements OnInit {

	  private data: Data[];
    private items = [];
    private id: number;
    private item;
    private isLoading: boolean = false;
	
  	constructor(
      private route: ActivatedRoute,   
		  private PokemonService: PokemonService,
      private location: Location
  	) { }

  	ngOnInit() {
  		this.requestData();
  	}

    goBack(): void {
      this.location.back();      
    }

    requestData(): void {
      this.PokemonService.getData(9, this.items.length).subscribe(data => {
        const url = data['results'].map(a => a.url);
        for(var i = 0; i < url.length; i++) {
          this.id = url[i].substring(34, url[i].lastIndexOf('/'));
          this.PokemonService.getPokemons(this.id).subscribe(item => {
            var name = item;          
            this.items.push(name);
            this.items.sort(function (a, b) {
              return a.id - b.id;
            });
          });  
        }
      });
      this.isLoading = false;
    }

    loadMore(): void {
      this.isLoading = true;
      this.requestData();  
    }
}
