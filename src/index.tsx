import { render } from 'preact';
import { Person } from './interfaces';
import { filterBirthdayPeople } from './utils/filterPeople';
import { formatNames } from './utils/formatNames';
import { confettiRain } from './utils/confetti';
import birthdaylist from './birthdaylist.json';

import './assets/style.css';
import cake from './assets/cake.svg';

const today: Date = new Date();
const todayString: string = today.toISOString().slice(5, 10); // MM-DD format

const people: Person[] = birthdaylist.people || [];
const birthdayPeople: Person[] = filterBirthdayPeople(people, todayString);
const names: string[] = birthdayPeople.map((person: Person) => person.name);
const formattedNames: string = formatNames(names);

const App = () => (
	<div>
		{birthdayPeople.length > 0 ? (
			<div>
				<h1><Cake /> Happy Birthday to <Cake /></h1>
				<h2>{formattedNames}</h2>
				<p>Wishing them a fantastic day!</p>
				{confettiRain()}
			</div>
		) : (
			<div>
				<h1>No one has a birthday today. Check back tomorrow!</h1>
				<h6>Do you think someone's name should be there? If so, add them <a href="https://github.com/werzq/birthday/edit/main/src/birthdaylist.json" target="_blank">here</a></h6>
			</div>
		)}
	</div>
);

const Cake = () => (
	<img src={cake} alt="cake" height={30} draggable={false} />
);

render(<App />, document.getElementById('app'));
