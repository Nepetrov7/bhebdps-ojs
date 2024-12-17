import { Warrior } from './Warrior.js';
import { Archer } from './Archer.js';
import { Mage } from './Mage.js';
import { Dwarf } from './Dwarf.js';
import { Crossbowman } from './Crossbowman.js';
import { Demiurge } from './Demiurge.js';
import { play } from './play.js';

const players = [
	new Warrior(0, 'Воин 1'),
	new Archer(5, 'Лучник 1'),
	new Mage(10, 'Маг 1'),
	new Dwarf(15, 'Гном 1'),
	new Crossbowman(20, 'Арбалетчик 1'),
	new Demiurge(25, 'Демиург 1'),
];

play(players);
