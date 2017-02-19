import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProveedorNaturalService } from '../../services/natural/proveedor-natural.service';
import { Proveedor } from '../../model/proveedor/proveedor';

@Component({
	selector: 'proveedor-juridico-edit',
	templateUrl: 'app/proveedor/view/juridico/proveedor-juridico-edit.html'
})
export class ProveedorJuridicoEditComponent implements OnInit {

	public titulo: string = "Editar Proveedor";
	public proveedor: Proveedor;
	public errorMessage: string;
	public status: string;
	public status_get_proveedor: string;

	constructor(
		private _proveedorService: ProveedorNaturalService,
		private _route: ActivatedRoute,
		private _router: Router
	) { }

	ngOnInit() {
		this.proveedor = new Proveedor("", "", "", "", "", "","","","","","","","","J");
		this.getProveedor();
	}

	getProveedor() {
		this._route.params.subscribe(params => {
			let id = params["id"];
			this._proveedorService.getProveedor(id).subscribe(
				response => {
					this.status_get_proveedor = response.estado;
					this.proveedor = response.objeto;
					if (this.status_get_proveedor != "success") {
						this._router.navigate(["/index"]);
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

		});
	}
	onSubmit() {
		this._proveedorService.updateProveedor(this.proveedor).subscribe(
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
