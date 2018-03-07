'use strict';
module.exports = (sequelize, DataTypes) => {
  var Supervisor = sequelize.define('Supervisor', {
    name: {type: DataTypes.STRING, allowNull: false},
    mobile: {type: DataTypes.STRING, allowNull: false}
  }, {});
  Supervisor.associate = function(models) {
    // associations can be defined here
    Supervisor.belongsTo(models.Hub, {
      foreignKey: 'hubId',
    });
  };
  return Supervisor;
};