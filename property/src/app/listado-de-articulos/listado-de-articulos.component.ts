import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listado-de-articulos',
  templateUrl: './listado-de-articulos.component.html',
  styleUrls: ['./listado-de-articulos.component.scss']
})
export class ListadoDeArticulosComponent {
  @Input() canasta: any[] = []
}
