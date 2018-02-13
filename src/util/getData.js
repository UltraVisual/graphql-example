const fs = require('fs');
const path = require('path');

module.exports = function getData(name) {
    const filepath = path.resolve(__dirname, `../api/${ name }.json`);
    const json = fs.readFileSync(filepath).toString();

    return JSON.parse(json);
}
