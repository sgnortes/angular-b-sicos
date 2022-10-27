import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/interfaces';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() nuevo: Personaje = { nombre: '', poder: 0 };
  /*@Output() onNuevoPersonaje: EventEmitter<Personaje> =
    new EventEmitter<Personaje>();*/

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    };
    console.log(this.nuevo);
  }

  constructor(private dbzService: DbzService) {}
}
