import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  nuevo: Personaje = {
    nombre: 'Trucks',
    poder: 14000,
  };

  /*agregarNuevoPersonaje(event: Personaje) {
    this.personajes.push(event);
  }*/
}
