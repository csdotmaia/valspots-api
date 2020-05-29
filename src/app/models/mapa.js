'use strict';
module.exports = (sequelize, DataTypes) => {
  const mapa = sequelize.define('mapa', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.STRING
    },
    nome: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    img: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    status: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    }
  }, { freezeTableName: true })

  mapa.associate = models => {
    mapa.hasMany(models.spots, { foreignKey: 'mapa_id' })
  }

  return mapa
}