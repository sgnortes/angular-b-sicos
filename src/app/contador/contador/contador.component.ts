import { Component } from '@angular/core';

@Component({
  selector: 'app-contador', // Define nombre del componente
  templateUrl: 'contador.component.html', // Define donde se encuentra el template html del componente
  styleUrls: ['contador.component.css'], // Define donde se encuentra la hoja de estilos del componente
})
export class ContadorComponent {
  titulo: string = 'Contador';
  base: number = 5;
  numero: number = 0;

  acumular(base: number): number {
    return (this.numero += base);
  }
}
