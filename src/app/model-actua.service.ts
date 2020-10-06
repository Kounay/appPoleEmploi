import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelActuaService {

  constructor() { }

  getModelActua() {
    return [
      { id: 1, nom: "Martine", formation: "non", arretMaladie: "non", congeMater: "non", pensionRetraite: "non", pensionInvalidite: "non", rechercheEmploi: "non"},
      { id: 1, nom: "Jack", formation: "non", arretMaladie: "non", congeMater: "non", pensionRetraite: "non", pensionInvalidite: "non", rechercheEmploi: "non"},
      { id: 1, nom: "Jean-Marie", formation: "non", arretMaladie: "oui", congeMater: "non", pensionRetraite: "non", pensionInvalidite: "non", rechercheEmploi: "non"}
    ];
  }
}
