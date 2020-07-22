'use strict';
module.exports = (sequelize, DataTypes) => {
  const spots = sequelize.define('spots', {
    id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nome:{
      allowNull: false,
      type: DataTypes.STRING,
    },
    nome_sub:{
      allowNull: false,
      type: DataTypes.STRING,
    },
    video:{
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    thumb:{
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    side:{
      allowNull: false,
      type: DataTypes.STRING,
    },
    descricao:{
      allowNull: false,
      type: DataTypes.STRING
    },
    status: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
    teclado: {
      allowNull: true,
      type: DataTypes.STRING
    },
    url:{
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
  //Proibe o sequelize de colocar o nome da tabela no plural
  }, { freezeTableName: true });

  spots.associate = models => {
    spots.belongsTo(models.personagem, { foreignKey: 'personagem_id' })
    spots.belongsTo(models.mapa, { foreignKey: 'mapa_id' })
  };
  
  return spots;
};