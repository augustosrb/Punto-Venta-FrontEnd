import { Component,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../services/categoria.service';
import { Categoria } from '../model/categoria';

@Component({
  selector: 'categoria-list',
  templateUrl: 'app/categoria/view/categoria-list.html'
})

export class CategoriaListComponent {
  public titulo: string = "Lista de Categorias";
  public categorias: Categoria[] = [];
  //paginacion
  public totalPages: number[];
  public pagePrev = 0;
  public pageNext = 0;
  public last: boolean;
  public first: boolean;
  //mensajes
  public errorMessage: string;
  public status: string;
  //resultados add-edit-delete
  public status_actions: string;
  //busqueda
  public searchString: string;
  
  constructor(
    private _categoriaService: CategoriaService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getAllCategorias();
  }

  getAllCategorias() {

    this._route.params.subscribe(params => {
      //paginación
      let page = +params["page"];
      if (!page) {
        page = 0;
      }
      //div mensaje
      this.status_actions = params["status"];
      if (!this.status_actions) {
        this.status_actions = "";
      }
      //search
      this.searchString = params["searchString"];
      if (!this.searchString) {
        this.searchString = "";
      }

      //llamada al servicio
      this._categoriaService.getCategorias(page,this.searchString).subscribe(
        response => {
          this.status = response.estado;

          if (this.status != "success") {
            this.status = "error";
          } else {
            this.categorias = response.objeto.content;
            this.first = response.objeto.first;
            this.last = response.objeto.last;
            //total de paginas
            this.totalPages = [];
            for (let i = 0; i < response.objeto.totalPages; i++) {
              this.totalPages.push(i);
            }
            //pagina Previa
            if (page >= 1) {
              this.pagePrev = (page - 1);
            } else {
              this.pagePrev = page;
            }
            //pagina Siguiente
            if (page < response.objeto.totalPages - 1 || page == 0) {
              this.pageNext = (page + 1);
            } else {
              this.pageNext = page;
            }
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

  search()
  {
    if(this.searchString!=null)
    {
      this._router.navigate(["/categoria-list/search/",this.searchString]);
    }else
    {
      this._router.navigate(["/categoria-list/"]);
    }
  }
}
