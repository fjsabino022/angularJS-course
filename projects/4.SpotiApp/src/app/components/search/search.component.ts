import { Component, OnInit } from '@angular/core';

// Servicios
import { SpotifyService } from './../../services/spotify-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  constructor(private _spotifyService: SpotifyService) { }

  termino = '';

  ngOnInit() {}

  buscarArtista () {
    this._spotifyService.getArtistas(this.termino)
    .subscribe(data => { // nos suscribimos al observable
      console.log('Search Component');
      console.log(data);
    });
  }

}
