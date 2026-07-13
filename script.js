const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const s = input[0].trim();
const t = input[1].trim();

let reversed = "";

for (let i = s.length - 1; i >= 0; i--) {
    reversed += s[i];
}

console.log(reversed === t ? "YES" : "NO");
