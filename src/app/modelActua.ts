export interface IModelActua {
  id: number;
  nom: string;
  prenom: string;
  formation: boolean;
  travail: boolean;
  heuresTravail: number;
  salaireBrut: number;
  stage: boolean;
  stageDu: string;
  stageAu: string;
  arretMaladie: boolean;
  arretMaladieDu: string;
  arretMaladieAu: string;
  pensionRetraite: boolean;
  pensionRetraiteDepuisLe: string;
  pensionInvalidite: boolean;
  pensionInvaliditeDepuisLe: string;
  rechercheEmploi: boolean;
  plusEnRechercheDepuis: string;
  motif: string;
}
