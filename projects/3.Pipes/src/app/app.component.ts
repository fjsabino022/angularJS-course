import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Franco';
  nombreraro: string = 'frANco jeSuS SabINo garellA';
  arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  a: number = 0.246;
  salario: number = 1234.5;

  persona = {
    nombre: 'Franco',
    edad: 27,
    fecha_nacimiento: new Date(),
    direccion: {
      calle: 'colon',
      numero: 1027,
      ciudad: 'Totoras'
    }
  };

  valorpromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Llego la data')
      , 3500);
  });
}
