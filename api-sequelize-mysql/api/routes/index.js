const bodyParse = require("body-parser");
const pessoas = require("./pessoasRoute");
const turmas = require("./turmasRoute");
const niveis = require("./niveisRoute");

module.exports = app => {
    app.use(
        bodyParse.json(),
        pessoas,
        turmas,
        niveis
    )
}