import { Component,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedorNaturalService } from '../services/natural/proveedor-natural.service';

@Component({
  selector: 'proveedor',
  templateUrl: 'app/proveedor/view/proveedor.html'
})
export class ProveedorComponent  {
  public tituloG: string = "Proveedor";
 }
