"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tarefa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tarefa.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          len: {
            args: [5, 50],
            msg: "Número de caracteres fora do limite",
          },
        },
      },
      descricao: {
        type: DataTypes.STRING(140),
        allowNull: true,
        validate: {
          len: {
            args: [0, 140],
            msg: "Número de caracteres fora do limite",
          },
        },
      },
      finalizada: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      terminadaEm: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      prioridade: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: {
            args: [["baixa", "média", "alta"]],
            msg: "Categoria de prioridade inválida",
          },
        },
      },
      membroId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        references: {
          model: "Membros",
          key: "id",
        },
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "Tarefa",
      tableName: "Tarefas",
    }
  );
  return Tarefa;
};
