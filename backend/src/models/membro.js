'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Membro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Membro.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      unique:true,
      allowNull: false
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [5],
          msg: "Número de caracteres fora do limite"
        }
      }
    },
    senha: {
      type:  DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3],
          msg: "Número de caracteres fora do limite"
        }
      }
    }
  }, {
    sequelize,
    modelName: "Membro",
    tableName: "Membros"
  });
  return Membro;
};