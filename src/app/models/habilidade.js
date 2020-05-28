'use strict';
module.exports = (sequelize, DataTypes) => {
  const habilidade = sequelize.define('habilidade', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nome: {
      allowNull: false,
      type: DataTypes.STRING
    },
    teclado: {
      allowNull: false,
      type: DataTypes.STRING
    },
    icone: {
      allowNull: false,
      type: DataTypes.STRING
    }
  //Proibe o sequelize de colocar o nome da tabela no plural
  }, { freezeTableName: true });

  habilidade.associate = models =>{
    habilidade.belongsTo(models.personagem, { foreignKey: 'personagem_id'})
  };

  return habilidade;
};