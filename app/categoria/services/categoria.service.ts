import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { Categoria } from '../model/categoria';

@Injectable()
export class CategoriaService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  public url = "http://localhost:5555";

  constructor(private _http: Http) { }

  createCategoria(categoria: Categoria) {
    let json = JSON.stringify(categoria);
    console.log(json);
    let params = json;
    console.log(params);

    return this._http.post(this.url + "/categoria", params, { headers: this.headers })
      .map(res => res.json());

  }

  updateCategoria(categoria: Categoria) {
    let json = JSON.stringify(categoria);
    let params = json;

    return this._http.post(this.url + "/categoria", params, { headers: this.headers })
      .map(res => res.json());
  }

  deleteCategoria(id: string) {
    return this._http.delete(this.url + "/categoria/" + id).map(res => res.json());
  }

  getCategorias(page: number = null, search: string = null) {

    if (search == "" && page != null) {
      return this._http.get(this.url + "/categoria/?page=" + page).map(res => res.json());
    } else if (page == 0 && search != null) {
      return this._http.get(this.url + "/categoria/?search=" + search).map(res => res.json());
    }

  }

  getComboCategorias() {
      return this._http.get(this.url + "/categoria/cbo/").map(res => res.json());
  }

  getCategoria(id: string) {
    return this._http.get(this.url + "/categoria/" + id).map(res => res.json());
  }

}
