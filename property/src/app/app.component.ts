import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  canasta = [
  {
    producto: "Cebolla",
    tipo: "Verdura",
    valor: "1900 lb"
  },
  {
    producto: "Tomate",
    tipo:"Verdura",
    valor:"1400 libra"
  },
  {
    producto: "Maracuya",
    tipo:"Fruta",
    valor:"3000 libra"
  },
  {
    producto: "Garbanzo",
    tipo:"Abarrote",
    valor:"4000 libra"
  },
  {
    producto: "Aceite",
    tipo:"Vegetal",
    valor:"10000 litro"
  }
  ];
}


