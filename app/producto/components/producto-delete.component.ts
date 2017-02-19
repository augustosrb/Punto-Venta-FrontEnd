import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductoService } from '../services/producto.service';
import { Producto } from '..//model/producto';
import { CategoriaService } from '../../categoria/services/categoria.service';
import { Categoria } from '../../categoria/model/categoria';

@Component({
	selector: 'producto-add',
	templateUrl: 'app/producto/view/producto-delete.html'
})
export class ProductoDeleteComponent implements OnInit {

	public titulo_inactivo: string = "¿Esta seguro que desea Eliminar este Registro?";
    public titulo_activo: string = "¿Esta seguro que desea Activar este Registro?";
	public producto: Producto;
	public comboCategorias: Categoria[] = [];
	public errorMessage: string;
	public status: string;
	public status_get_producto: string;

	constructor(
        private _productoService: ProductoService,
		private _categoriaService: CategoriaService,
		private _route: ActivatedRoute,
		private _router: Router
	) { }

	ngOnInit() {
		this.producto = new Producto("", "", "", "", "","","","");
		this.getComboCategorias();
		this.getProducto();
	}

	getProducto() {
		this._route.params.subscribe(params => {
			let id = params["id"];
			this._productoService.getProducto(id).subscribe(
				response => {
					this.status_get_producto = response.estado;
					this.producto = response.objeto;
					if (this.status_get_producto != "success") {
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
	getComboCategorias() {

		this._route.params.subscribe(params => {

			//llamada al servicio
			this._categoriaService.getComboCategorias().subscribe(
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
	onSubmit(id: string) {
		this._categoriaService.deleteCategoria(id).subscribe(
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

	goBack(): void {
		this._router.navigate(["/producto-list/"]);
	}

}
