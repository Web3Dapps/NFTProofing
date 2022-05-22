import { Injectable } from '@angular/core';
const Troll = require('../../../../deployments/Troll.json');
const Monster = require('../../../../deployments/Monster.json');
const Barbarian = require('../../../../deployments/Barbarian.json');
const Human = require('../../../../deployments/Human.json');
const Character = require('../../../../deployments/Character.json');
const adreesses = require('../../../../deployments/addresses.json');



@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor() { }



  getHuman(){}
  getBarbarian(){}
  getTroll(){}
  getCharacter(){}
  getMonster(){}

}
