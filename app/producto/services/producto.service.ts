import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { Producto } from '../model/producto';

@Injectable()
export class ProductoService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  public url = "http://localhost:5555";

  constructor(private _http: Http) { }

  createProducto(producto: Producto) {
    let json = JSON.stringify(producto);
    console.log(json);
    let params = json;
    console.log(params);

    return this._http.post(this.url + "/producto", params, { headers: this.headers })
      .map(res => res.json());

  }

  updateProducto(producto: Producto) {
    let json = JSON.stringify(producto);
    let params = json;

    return this._http.post(this.url + "/producto", params, { headers: this.headers })
      .map(res => res.json());
  }

  deleteProducto(id: string) {
    return this._http.delete(this.url + "/producto/" + id).map(res => res.json());
  }

  getProductos(page: number = null, search: string = null) {

    if (search == "" && page != null) {
      return this._http.get(this.url + "/producto/?page=" + page).map(res => res.json());
    } else if (page == 0 && search != null) {
      return this._http.get(this.url + "/producto/?search=" + search).map(res => res.json());
    }

  }

  getComboCategorias() {
      return this._http.get(this.url + "/categoria/cbo/").map(res => res.json());
  }

  getProducto(id: string) {
    return this._http.get(this.url + "/producto/" + id).map(res => res.json());
  }

}
