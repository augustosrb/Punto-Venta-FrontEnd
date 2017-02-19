import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProveedorComponent }   from './proveedor/components/proveedor.component';
import { ProveedorNaturalListComponent }   from './proveedor/components/natural/proveedor-natural-list.component';
import { ProveedorNaturalAddComponent }   from './proveedor/components/natural/proveedor-natural-add.component';
import { ProveedorNaturalEditComponent }   from './proveedor/components/natural/proveedor-natural-edit.component';
import { ProveedorNaturalDeleteComponent }   from './proveedor/components/natural/proveedor-natural-delete.component';

import { ProveedorJuridicoListComponent }   from './proveedor/components/juridico/proveedor-juridico-list.component';
import { ProveedorJuridicoAddComponent }   from './proveedor/components/juridico/proveedor-juridico-add.component';
import { ProveedorJuridicoEditComponent }   from './proveedor/components/juridico/proveedor-juridico-edit.component';
import { ProveedorJuridicoDeleteComponent }   from './proveedor/components/juridico/proveedor-juridico-delete.component';


import { CategoriaListComponent }   from './categoria/components/categoria-list.component';
import { CategoriaAddComponent }   from './categoria/components/categoria-add.component';
import { CategoriaEditComponent }   from './categoria/components/categoria-edit.component';
import { CategoriaDeleteComponent }   from './categoria/components/categoria-delete.component';

import { ProductoListComponent }   from './producto/components/producto-list.component';
import { ProductoAddComponent }   from './producto/components/producto-add.component';
import { ProductoEditComponent }   from './producto/components/producto-edit.component';
import { ProductoDeleteComponent }   from './producto/components/producto-delete.component';

import { MantenimientosComponent }   from './components/paginas/mantenimientos.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  //paginas Generales  
  { path: 'mantenimientos',  component: MantenimientosComponent },
  //Mnt. Proveedor Natural
  {  path:'proveedor',  component: ProveedorComponent },
  {  path:'proveedor-natural-list',  component: ProveedorNaturalListComponent },
  {  path:'proveedor-natural-list/:page', component: ProveedorNaturalListComponent},
  {  path:'proveedor-natural-list/search/:searchString', component: ProveedorNaturalListComponent},
  {  path:'proveedor-natural-list/estado/:status',component:ProveedorNaturalListComponent},
  {  path:'proveedor-natural-add',component:ProveedorNaturalAddComponent},
  {  path:'proveedor-natural-edit/:id', component: ProveedorNaturalEditComponent},
  {  path:'proveedor-natural-delete/:id', component: ProveedorNaturalDeleteComponent},
  //Mnt. Proveedor Natural
  {  path:'proveedor-juridico-list',  component: ProveedorJuridicoListComponent },
  {  path:'proveedor-juridico-list/:page', component: ProveedorJuridicoListComponent},
  {  path:'proveedor-juridico-list/search/:searchString', component: ProveedorJuridicoListComponent},
  {  path:'proveedor-juridico-list/estado/:status',component:ProveedorJuridicoListComponent},
  {  path:'proveedor-juridico-add',component:ProveedorJuridicoAddComponent},
  {  path:'proveedor-juridico-edit/:id', component: ProveedorJuridicoEditComponent},
  {  path:'proveedor-juridico-delete/:id', component: ProveedorJuridicoDeleteComponent},
  //Mnt. Categoria
  {  path:'categoria-list',  component: CategoriaListComponent },
  {  path:'categoria-list/:page', component: CategoriaListComponent},
  {  path:'categoria-list/search/:searchString', component: CategoriaListComponent},
  {  path:'categoria-list/estado/:status',component:CategoriaListComponent},
  {  path:'categoria-add',component:CategoriaAddComponent},
  {  path:'categoria-edit/:id', component: CategoriaEditComponent},
  {  path:'categoria-delete/:id', component: CategoriaDeleteComponent},
  //Mnt. Producto
  {  path:'producto-list',  component: ProductoListComponent },
  {  path:'producto-list/:page', component: ProductoListComponent},
  {  path:'producto-list/search/:searchString', component: ProductoListComponent},
  {  path:'producto-list/estado/:status',component:ProductoListComponent},
  {  path:'producto-add',component:ProductoAddComponent},
  {  path:'producto-edit/:id', component: ProductoEditComponent},
  {  path:'producto-delete/:id', component: ProductoDeleteComponent}

  //{ path: 'categoria-list',  component: CategoriaListComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
