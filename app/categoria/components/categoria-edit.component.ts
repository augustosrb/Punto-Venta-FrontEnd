import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CategoriaService } from '../services/categoria.service';
import { Categoria } from '../model/categoria';

@Component({
	selector: 'categoria-edit',
	templateUrl: 'app/categoria/view/categoria-edit.html'
})
export class CategoriaEditComponent implements OnInit {

	public titulo: string = "Editar Categoria";
	public categoria: Categoria;
	public comboCategorias: Categoria[] = [];
	public errorMessage: string;
	public status: string;
	public status_get_categoria: string;

	constructor(
		private _categoriaService: CategoriaService,
		private _route: ActivatedRoute,
		private _router: Router
	) { }

	ngOnInit() {
		this.categoria = new Categoria("", "", "", "", "");
		this.getComboCategorias();
		this.getCategoria();
	}

	getCategoria() {
		this._route.params.subscribe(params => {
			let id = params["id"];
			this._categoriaService.getCategoria(id).subscribe(
				response => {
					this.status_get_categoria = response.estado;
					this.categoria = response.objeto;
					if (this.status_get_categoria != "success") {
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
	onSubmit() {
		this._categoriaService.updateCategoria(this.categoria).subscribe(
			response => {
				this.status = response.estado;

				if (this.status != "success") {
					this.status = "error";
				} else {
					this._router.navigate(["/categoria-list/estado/" + this.status]);
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
		this._router.navigate(["/categoria-list/"]);
	}

}
