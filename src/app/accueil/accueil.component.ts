import { ModelActuaService } from './../model-actua.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  public modelsActua = [];

  // tslint:disable-next-line: variable-name
  constructor(private _ModelActuaService: ModelActuaService) {}

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this._ModelActuaService.getModelActua().subscribe(data => (this.modelsActua = data));
  }

}
