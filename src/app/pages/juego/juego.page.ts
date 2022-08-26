import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-juego',
  templateUrl: './juego.page.html',
  styleUrls: ['./juego.page.scss'],
})
export class JuegoPage implements OnInit {
  icono:string;

  constructor() { }

  ngOnInit() {
  }

  onClick(evento)
  {
    console.log("ok");
    this.icono="ellipse-outline";
  }
}
