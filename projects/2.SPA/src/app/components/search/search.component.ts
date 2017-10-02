import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// Servicios
import { HeroesService } from './../../servicios/heores.service';

// Components
import { Heroe } from './../../interfaces/heroe';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor(private _activatedRouter: ActivatedRoute,
    private _heroeService: HeroesService,
    private _router: Router) { }

  ngOnInit() {
    this._activatedRouter.params.subscribe(params => {
      this.heroes = this._heroeService.geyHeroeByNombre(params['prefix']);
      this.termino = params['prefix'];
    });
  }

  verHeroe(index: number) {
    this._router.navigate(['/heroe', index]);
  }

}
