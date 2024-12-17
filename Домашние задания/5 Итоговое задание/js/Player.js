import { Arm } from './Weapon.js';

export class Player {
	constructor(position, name) {
		this.life = 100;
		this.magic = 20;
		this.speed = 1;
		this.attack = 10;
		this.agility = 5;
		this.luck = 10;
		this.level = 1;
		this.experience = 0;
		this.armor = null;
		this.description = 'Игрок';
		this.weapon = new Arm();
		this.position = position;
		this.name = name;
	}

	getLuck() {
		return (Math.random() * 100 + this.luck) / 100;
	}

	takeDamage(damage) {
		if (this.armor && !this.armor.isBroken()) {
			damage = this.armor.absorbDamage(damage);
		}
		this.life = Math.max(0, this.life - damage);
	}

	isDead() {
		return this.life === 0;
	}

	turn(players) {
		const enemy = this.chooseEnemy(players);
		this.moveToEnemy(enemy);
		this.tryAttack(enemy);
		this.checkWeapon();
	}

	chooseEnemy(players) {
		return players
			.filter((p) => p !== this && !p.isDead())
			.reduce(
				(minEnemy, p) => (p.life < minEnemy.life ? p : minEnemy),
				players[0]
			);
	}

	moveToEnemy(enemy) {
		if (this.position < enemy.position) this.position += this.speed;
		else this.position -= this.speed;
	}

	tryAttack(enemy) {
		const distance = Math.abs(this.position - enemy.position);
		if (distance > this.weapon.range) return;

		const damage = this.attack * this.getLuck();
		enemy.takeDamage(damage);
		console.log(
			`${this.name} атакует ${enemy.name} и наносит ${damage.toFixed(
				2
			)} урона.`
		);
	}

	checkWeapon() {
		if (this.weapon.isBroken()) {
			console.log(
				`${this.weapon.name} сломано! Замена на запасное оружие.`
			);
			this.weapon = new Arm();
		}
	}
}
