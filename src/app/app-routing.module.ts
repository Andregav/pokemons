import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonjumbotronComponent } from './pokemonjumbotron/pokemonjumbotron.component';
import { PokemonlistComponent }  from './pokemonlist/pokemonlist.component';
import { PokemonDetailComponent }  from './pokemon-detail/pokemon-detail.component';


const routes: Routes = [
	{ path: '', component: PokemonjumbotronComponent },
	{ path: ':list', component: PokemonlistComponent },
	{ path: 'list/:list.name', component: PokemonDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
