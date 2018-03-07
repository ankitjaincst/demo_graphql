'use strict';
module.exports = (sequelize, DataTypes) => {
  var Hub = sequelize.define('Hub', {
    address: {type: DataTypes.STRING, allowNull: false},
    location_name: {type: DataTypes.STRING, allowNull: false}
  }, {});
  Hub.associate = function(models) {
    // associations can be defined here
    Hub.hasMany(models.DeliveryBoy, {
      foreignKey: 'hubId',
      as: 'deliveryBoys',
    });

    Hub.hasMany(models.Supervisor, {
      foreignKey: 'hubId',
      as: 'supervisors',
    });

  };
  return Hub;
};