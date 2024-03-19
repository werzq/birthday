import { Person } from '../interfaces';

export function filterBirthdayPeople(people: Person[], todayString: string): Person[] {
    return people.filter((person: Person) => {
        const birthdayString: string = person.birthday.slice(5);
        return birthdayString === todayString;
    });
}