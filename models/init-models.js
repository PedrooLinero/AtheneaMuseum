// init-models.js 
// Este archivo se genera automáticamente con el comando sequelize-auto -o "./models" -d museum -h localhost -u root -x root -e mysql
// y se encarga de definir las relaciones entre las tablas de la base de datos
var DataTypes = require("sequelize").DataTypes;
var _artistas = require("./artistas");
var _obras = require("./obras");

function initModels(sequelize) {
  var artistas = _artistas(sequelize, DataTypes);
  var obras = _obras(sequelize, DataTypes);

  // Un artista tiene muchas obras
  artistas.hasMany(obras, { as: "obras", foreignKey: "idartista" });

  // Una obra pertenece a un artista
  obras.belongsTo(artistas, { as: "artista", foreignKey: "idartista" });

  return {
    artistas,
    obras
  };
}

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
