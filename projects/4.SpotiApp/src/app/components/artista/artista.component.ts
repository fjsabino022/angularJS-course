import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// Servicios
import { SpotifyService } from './../../services/spotify-service.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {

  constructor(private _activatedRouter: ActivatedRoute,
              private _sporityService: SpotifyService) { }

  artista: any;
  canciones: any[];

  ngOnInit() {
    this._activatedRouter.params
      .map(parametros => parametros['id'])
      .subscribe( id => {

        this._sporityService.getArtista(id).subscribe(
          data => {
            this.artista = data;
          }
        );
        this._sporityService.getTop(id).subscribe(
          data => {
            this.canciones = data;
          }
        );

      });
  }

}
