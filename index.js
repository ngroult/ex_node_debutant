module.imports = "information.js";
var cowsay = require("cowsay");
const { name } = require("./information");
const person = require("./information");

console.log(cowsay.say({
    text : `${person.name} ${person.campus}`,
}));