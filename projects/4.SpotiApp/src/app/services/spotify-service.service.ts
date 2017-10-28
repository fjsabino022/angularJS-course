import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];
  urlbusqueda: string = 'https://api.spotify.com/v1/search';
  urlartista: string = 'https://api.spotify.com/v1/artists';

  token: string = 'Bearer BQBdm4BOQ-7-KchcXWno8YM0J1bBSNunnjHLoto2YGs7XES9fyFtZrxKKbvIxzJIAV5t_t0P7oW0SAGbBoqWaw';

  constructor(private _http: Http) { }

  getArtistas(termino: string) {
    let query: string = `?q=${termino}&type=artist`;
    let url: string = this.urlbusqueda + query;

    let headers = new Headers();
    headers.append('authorization', this.token);

    return this._http.get(url, {headers})
      .map(res => { // el map devuelve un observable
        this.artistas = res.json().artists.items;
        console.log(this.artistas); // esto es solo para loguear el resultado nada mas
        return this.artistas; // esto es solo para loguear el resultado nada mas
    });
  }

  getArtista(id: string) {
    let query: string = `/${id}/top-tracks?country=ES`;
    let url: string = this.urlartista + query;

    let headers = new Headers();
    headers.append('authorization', this.token);

    return this._http.get(url, {headers})
      .map(res => { // el map devuelve un observable
        console.log(res.json());
        return res.json();
    });
  }

  getTop(id: string) {
    let query: string = `/${id}`;
    let url: string = this.urlartista + query;

    let headers = new Headers();
    headers.append('authorization', this.token);

    return this._http.get(url, {headers})
      .map(res => { // el map devuelve un observable
        console.log(res.json().tracks);
        return res.json().tracks;
    });
  }
}
