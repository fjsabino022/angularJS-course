import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Heroe } from './../../interfaces/heroe';

// Servicios
import { HeroesService } from './../../servicios/heores.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService,
    private _router: Router) {
    console.log('Contructor de heroes creado..');
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(index: number) {
    this._router.navigate( ['/heroe', index] );
  }

}
