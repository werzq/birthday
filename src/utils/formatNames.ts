export function formatNames(names: string[]): string {
    let formattedNames: string = '';
    if (names.length === 1) {
        formattedNames = names[0];
    } else if (names.length === 2) {
        formattedNames = `${names[0]} & ${names[1]}`;
    } else {
        const otherNames: string = names.slice(0, -1).join(', ');
        const lastPerson: string = names.slice(-1)[0];
        formattedNames = `${otherNames} & ${lastPerson}`;
    }
    return formattedNames;
}