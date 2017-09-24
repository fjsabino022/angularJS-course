import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: 'body.component.html'
})
export class BodyComponent {

    mostrar:boolean = false;
   
    personajes:string[] = ['SpiderMan', 'Dr.Octopus', 'Venom'];

    frase: any = {
        mensaje: 'El poder requiere una gran responsabilidad',
        autor: 'Franco Sabino'
    };
}
