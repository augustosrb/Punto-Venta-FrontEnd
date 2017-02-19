import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { Proveedor } from '../../model/proveedor/proveedor';

@Injectable()
export class ProveedorNaturalService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  public url = "http://localhost:4444";

  constructor(private _http: Http) { }

  createProveedor(proveedor: Proveedor) {
    let json = JSON.stringify(proveedor);
    console.log(json);
    let params = json;
    console.log(params);

    return this._http.post(this.url + "/persona", params, { headers: this.headers })
      .map(res => res.json());

  }

  updateProveedor(proveedor: Proveedor) {
    let json = JSON.stringify(proveedor);
    let params = json;

    return this._http.post(this.url + "/persona", params, { headers: this.headers })
      .map(res => res.json());
  }

  deleteProveedor(id: string) {
    return this._http.delete(this.url + "/persona/" + id).map(res => res.json());
  }

  getProveedores(page: number = null, search: string = null) {

    if (search == "" && page != null) {
      return this._http.get(this.url + "/persona/natural/?page=" + page).map(res => res.json());
    } else if (page == 0 && search != null) {
      return this._http.get(this.url + "/persona/natural/?search=" + search).map(res => res.json());
    }

  }

  getProveedoresJ(page: number = null, search: string = null) {

    if (search == "" && page != null) {
      return this._http.get(this.url + "/persona/juridica/?page=" + page).map(res => res.json());
    } else if (page == 0 && search != null) {
      return this._http.get(this.url + "/persona/juridica/?search=" + search).map(res => res.json());
    }

  }

  getProveedor(id: string) {
    return this._http.get(this.url + "/persona/" + id).map(res => res.json());
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  searchProveedor(search: string = null) {
    return this._http.get(this.url + "/persona/natural/?search=" + search).map(res => res.json());
  }
}
