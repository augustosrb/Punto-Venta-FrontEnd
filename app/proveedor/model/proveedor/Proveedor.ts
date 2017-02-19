export class Proveedor
{

   /* id:string;
    nombre:string;
    apepat:string;
    apemat:string;
    //juridica
    razsoc:string;
    ruc:string;
    //datos basicos

    tipdoc:string;
    nrodoc:string;
    direccion:string;
    telefono:string;
    celular:string;
    
    fecnac:string;
    estadoDesc:string;
    tipo:string;

  constructor(proveedor:any=null) {
    this.id=proveedor.id;
    this.nombre=proveedor.nombre;
    this.apepat=proveedor.apepat;
    this.apemat=proveedor.apemat;
    //juridica
    this.razsoc=proveedor.razsoc;
    this.ruc=proveedor.ruc;
    //datos basicos

    this.tipdoc=proveedor.tipdoc;
    this.nrodoc=proveedor.nrodoc;
    this.direccion=proveedor.direccion;
    this.telefono=proveedor.telefono;
    this.celular=proveedor.celular;
    
    this.fecnac=proveedor.fecnac;
    this.estadoDesc=proveedor.estadoDesc;
    this.tipo=proveedor.tipo;

}*/


  constructor(
    public id:string,
    public nombre:string,
    public apepat:string,
    public apemat:string,
    //juridica
    public razsoc:string,
    public ruc:string,
    //datos basicos

    public tipdoc:string,
    public nrodoc:string,
    public direccion:string,
    public telefono:string,
    public celular:string,
    
    public fecnac:string,
    public estadoDesc:string,
    public tipo:string
){}


}
