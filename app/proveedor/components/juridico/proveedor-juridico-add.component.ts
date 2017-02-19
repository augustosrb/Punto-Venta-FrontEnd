import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProveedorNaturalService } from '../../services/natural/proveedor-natural.service';
import { Proveedor } from '../../model/proveedor/proveedor';

@Component({
  selector: 'proveedor-juridico-add',
  templateUrl: 'app/proveedor/view/juridico/proveedor-juridico-add.html'
})
export class ProveedorJuridicoAddComponent implements OnInit {

  public titulo: string = "Agregar Proveedor Natural";
  public proveedor: Proveedor;
  public errorMessage: string;
  public status: string;
  //Tipo Persona
  public tipoProveedor: string = "juridica";


  constructor(
    private _proveedorService: ProveedorNaturalService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.proveedor = new Proveedor("", "", "", "", "", "","","","","","","","","J");
  }

  onSubmit() {
    this._proveedorService.createProveedor(this.proveedor).subscribe(
      response => {
        this.status = response.estado;

        if (this.status != "success") {
          this.status = "error";
        } else {
          this._router.navigate(["/proveedor-juridico-list/estado/" + this.status]);
        }
      },
      error => {
        this.errorMessage = <any>error;

        if (this.errorMessage != null) {
          console.log(this.errorMessage);
          alert("Error en la petición");
        }
      }

    );
  }

  goBack(): void {
    this._router.navigate(["/proveedor-juridico-list/"]);
  }
}
