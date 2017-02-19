import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductoService } from '../services/producto.service';
import { Producto } from '../model/producto';
import { Categoria } from '../../categoria/model/categoria';

@Component({
	selector: 'producto-add',
	templateUrl: 'app/producto/view/producto-add.html'
})
export class ProductoAddComponent implements OnInit {

	public titulo: string = "Agregar Producto";
	public producto: Producto;
	public comboCategorias: Categoria[] = [];
	public errorMessage: string;
	public status: string;
	public status_get_producto: string;

	constructor(
		private _productoService: ProductoService,
		private _route: ActivatedRoute,
		private _router: Router
	) { }

	ngOnInit() {
		this.producto = new Producto("", "", "", "", "","","","");
		this.getComboCategorias();
	}
	onSubmit() {
		this._productoService.createProducto(this.producto).subscribe(
			response => {
				this.status = response.estado;

				if (this.status != "success") {
					this.status = "error";
				} else {
					this._router.navigate(["/producto-list/estado/" + this.status]);
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

	getComboCategorias() {

		this._route.params.subscribe(params => {

			//llamada al servicio
			this._productoService.getComboCategorias().subscribe(
				response => {
					this.status = response.estado;

					if (this.status != "success") {
						this.status = "error";
					} else {
						this.comboCategorias = response.objeto;
						console.log(this.comboCategorias);
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

	goBack(): void {
		this._router.navigate(["/producto-list/"]);
	}

}
