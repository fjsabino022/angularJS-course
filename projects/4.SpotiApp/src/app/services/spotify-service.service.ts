import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];
  urlbusqueda: string = 'https://api.spotify.com/v1/search';
  urlartista: string = 'https://api.spotify.com/v1/artists';

  constructor(private _http: Http) { }

  getArtistas(termino: string) {
    let query: string = `?q=${termino}&type=artist`;
    let url: string = this.urlbusqueda + query;

    let headers = new Headers();
    headers.append('authorization', 'Bearer BQAZEtP3QNpPIjvj1in8YqunCZ11JV17Gz7ItqdUi-ymgIL_lurlNdOCTEhRlHtRqSKSGtPgeY5QqNqtIgcf_g');

    return this._http.get(url, {headers})
      .map(res => { // el map devuelve un observable
        this.artistas = res.json().artists.items;
        console.log(this.artistas); // esto es solo para loguear el resultado nada mas
        return this.artistas; // esto es solo para loguear el resultado nada mas
    });
  }
}
