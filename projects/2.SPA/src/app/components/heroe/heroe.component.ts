import { Heroe } from './../../interfaces/heroe';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Servicio
import { HeroesService } from './../../servicios/heores.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = null;

  constructor(private _activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService) {
    this._activatedRoute.params.subscribe(params => {
      this.heroe = this._heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }

  ngOnInit() {
  }

}
