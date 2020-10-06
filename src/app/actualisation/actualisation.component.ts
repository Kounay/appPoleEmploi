import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ModelActuaService } from '../model-actua.service';

@Component({
  selector: 'app-actualisation',
  templateUrl: './actualisation.component.html',
  styleUrls: ['./actualisation.component.css']
})
export class ActualisationComponent implements OnInit {
  actuaForm: FormGroup;

  constructor(){}

  public modelesActualisation;

  public date = Date.now();

  formationOption = [
    {key: 'yes', label: 'Oui'},
    {key: 'no', label: 'non'},
  ];

//  Pour le choix des Modele d'actualisation a mettre en place plus tard dans ACCUEIL
//  constructor(private _modelActuaService: ModelActuaService) { }

  ngOnInit() {

    /**Appel de la fonction getModelActua permettant de récupérer la liste des modèles d'actualisation (A modif) */
  //  this.modelesActualisation = this._modelActuaService.getModelActua();
    this.date;

    this.actuaForm = new FormGroup({
      formation: new FormControl(),
    });
  }

  ngSubmit (){
    const value = this.actuaForm.get('yes').value;
  }

  valider (){
    
  }
}
