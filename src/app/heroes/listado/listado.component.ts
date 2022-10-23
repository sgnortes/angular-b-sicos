import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  constructor() {
    this.heroeBorrado = '';
  }

  heroes: string[] = [
    'Ironman',
    'Superman',
    'Hulk',
    'Capitán América',
    'Ant Man',
  ];

  heroeBorrado: string;

  borrarHeroe(): void {
    console.log('borrando');
    // Devolvemos heroe, en caso de ser undefined devolvemos string vacío
    this.heroeBorrado = this.heroes.pop() || '';
  }
}
