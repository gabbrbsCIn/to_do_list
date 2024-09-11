"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Tarefas", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING(50),
        allowNull: false,
        validate: {
          len: {
            args: [5, 50],
            msg: "Número de caracteres fora do limite",
          },
        },
      },
      descricao: {
        type: Sequelize.STRING(140),
        allowNull: true,
        validate: {
          len: {
            args: [0, 140],
            msg: "Número de caracteres fora do limite",
          },
        },
      },
      finalizada: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      terminadaEm: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      prioridade: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isIn: {
            args: [["baixa", "média", "alta"]],
            msg: "Categoria de prioridade inválida",
          },
        },
      },
      membroId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        references: {
          model: "Membros", 
          key: "id",
        },
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Tarefas");
  },
};
