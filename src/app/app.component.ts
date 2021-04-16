import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  nombre: string = 'Jefry Pardo';
  nombre2: string = 'jeFFry jHoaN parDO alZate';
  arreglo: string[]=["Jefry-01","Johan-02","Pardo-03","Alzate-04"];
  PI: number = Math.PI;
  salario: number = 1234.5;
  porcentaje: number = 0.234;
  fecha:Date = new Date();
  activo:boolean = true;

  idioma:string = 'es';
  videoUrl:string = 'https://www.youtube.com/embed/iLC-tHvkNvI';


  valorPromesa= new Promise<string>( (resolve) =>{
    setTimeout( () => {
      resolve('llego la data');
    },4500); 
  });


  heroe={
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion:{
      calle: 'Primera',
      casa: 20
    }
  }

}
