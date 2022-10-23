import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe', // Define nombre del componente
  templateUrl: 'heroe.component.html', // Define donde se encuentra el template html del componente
  styleUrls: ['heroe.component.css'], // Define donde se encuentra la hoja de estilos del componente
})
export class HeroeComponent {
  nombre: string = 'Ironman';
  edad: number = 45;

  get nombreCapitalizado() {
    return this.nombre.toUpperCase();
  }

  get infoCompleta() {
    return `${this.nombre} - ${this.edad}`;
  }
}
