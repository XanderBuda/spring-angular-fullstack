import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {

  listaCursos: string[] = ['TypeScript', 'JavaScript', 'Java SE', 'C#', 'PHP'];

  habilitar: boolean = true;
  buttonText: string = 'Ocultar';

  constructor() { }

  setHabilitar() {

    this.habilitar = (this.habilitar == true) ? false : true;
    this.buttonText = (this.habilitar == true) ? 'Ocultar' : 'Mostrar';

  }


}
