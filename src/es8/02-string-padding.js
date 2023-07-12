const string = 'Hello';

console.log(string.padStart(6,'-'));
console.log(string.padStart(string.length + 3, 'DB_'));

console.log(string.padEnd(6,'-'));
console.log(string.padEnd(string.length + 3, '_DB'));
