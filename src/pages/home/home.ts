import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public heroes:string[] = ["Megaman", "Strider", "Ciclope","Zero","Dante"];


  constructor() {}

}
