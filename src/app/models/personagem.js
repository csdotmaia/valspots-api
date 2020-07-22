'use strict';
module.exports = (sequelize, DataTypes) =>{
  const personagem = sequelize.define('personagem', {
    id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nome:{
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    icone:{
      allowNull: false,
      type: DataTypes.STRING
    },
    text_solo:{
      allowNull: false,
      type: DataTypes.STRING
    },
    text_duo:{
      allowNull: false,
      type: DataTypes.STRING
    },
    status: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    }
  //Proibe o sequelize de colocar o nome da tabela no plural
  }, { freezeTableName: true });

  personagem.associate = models => {
    personagem.hasMany(models.spots, { foreignKey: 'personagem_id' })
    personagem.hasMany(models.habilidade, { foreignKey: 'personagem_id' })
  };

  return personagem;
};