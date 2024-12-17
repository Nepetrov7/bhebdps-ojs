import { Player } from './Player.js';
import { Bow } from './Weapon.js';

export class Archer extends Player {
	constructor(position, name) {
		super(position, name);
		this.life = 80;
		this.magic = 35;
		this.attack = 5;
		this.agility = 10;
		this.weapon = new Bow();
		this.description = 'Лучник';
	}
}
