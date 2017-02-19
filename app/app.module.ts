import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

//componentes
import { AppComponent }  from './app.component';
//proveedor natural components
import { ProveedorComponent }   from './proveedor/components/proveedor.component';
import { ProveedorNaturalListComponent }   from './proveedor/components/natural/proveedor-natural-list.component';
import { ProveedorNaturalAddComponent }   from './proveedor/components/natural/proveedor-natural-add.component';
import { ProveedorNaturalEditComponent }   from './proveedor/components/natural/proveedor-natural-edit.component';
import {  ProveedorNaturalDeleteComponent }   from './proveedor/components/natural/proveedor-natural-delete.component';
//proveedor juridico
import { ProveedorJuridicoListComponent }   from './proveedor/components/juridico/proveedor-juridico-list.component';
import { ProveedorJuridicoAddComponent }   from './proveedor/components/juridico/proveedor-juridico-add.component';
import { ProveedorJuridicoEditComponent }   from './proveedor/components/juridico/proveedor-juridico-edit.component';
import { ProveedorJuridicoDeleteComponent }   from './proveedor/components/juridico/proveedor-juridico-delete.component';
//categoria
import { CategoriaListComponent }   from './categoria/components/categoria-list.component';
import { CategoriaAddComponent }   from './categoria/components/categoria-add.component';
import { CategoriaEditComponent }   from './categoria/components/categoria-edit.component';
import { CategoriaDeleteComponent }   from './categoria/components/categoria-delete.component';

import { ProductoListComponent }   from './producto/components/producto-list.component';
import { ProductoAddComponent }   from './producto/components/producto-add.component';
import { ProductoEditComponent }   from './producto/components/producto-edit.component';
import { ProductoDeleteComponent }   from './producto/components/producto-delete.component';

import { MantenimientosComponent }   from './components/paginas/mantenimientos.component';
//services
import {  ProveedorNaturalService }   from './proveedor/services/natural/proveedor-natural.service';
import {  CategoriaService }   from './categoria/services/categoria.service';
import {  ProductoService }   from './producto/services/producto.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule  ],
    //componentes globales
  declarations: [
    AppComponent,
    ProveedorComponent,
    ProveedorNaturalListComponent,
    ProveedorNaturalAddComponent,
    ProveedorNaturalEditComponent,
    ProveedorNaturalDeleteComponent,  

    ProveedorJuridicoListComponent,
    ProveedorJuridicoAddComponent,
    ProveedorJuridicoEditComponent,
    ProveedorJuridicoDeleteComponent,  

    CategoriaListComponent,
    CategoriaAddComponent,
    CategoriaEditComponent,
    CategoriaDeleteComponent,
    
    ProductoListComponent,
    ProductoAddComponent,
    ProductoEditComponent,
    ProductoDeleteComponent,

    MantenimientosComponent
   ],
  providers: [  ProveedorNaturalService,CategoriaService,ProductoService ],
  bootstrap:[ AppComponent ]
})
export class AppModule { }
