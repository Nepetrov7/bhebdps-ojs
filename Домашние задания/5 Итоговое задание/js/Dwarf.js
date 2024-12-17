import { Warrior } from './Warrior.js';
import { Axe } from './Weapon.js';

export class Dwarf extends Warrior {
	constructor(position, name) {
		super(position, name);
		this.life = 130;
		this.attack = 15;
		this.luck = 20;
		this.weapon = new Axe();
		this.description = 'Гном';
		this.hitCount = 0;
	}

	takeDamage(damage) {
		this.hitCount++;
		if (this.hitCount % 6 === 0 && this.getLuck() > 0.5) {
			console.log(
				`${this.name} выдерживает атаку благодаря стойкости гнома!`
			);
			super.takeDamage(damage / 2);
		} else {
			super.takeDamage(damage);
		}
	}
}
