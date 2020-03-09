import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemonjumbotron',
  templateUrl: './pokemonjumbotron.component.html',
  styleUrls: ['./pokemonjumbotron.component.scss']
})
export class PokemonjumbotronComponent implements OnInit {

	private main = './assets/main.png';

  constructor() { }

  ngOnInit() {
  }

}
