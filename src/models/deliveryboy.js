'use strict';
module.exports = (sequelize, DataTypes) => {
  var DeliveryBoy = sequelize.define('DeliveryBoy', {
    name: {type: DataTypes.STRING, allowNull: false},
    mobile: {type: DataTypes.STRING, allowNull: false}
  }, {});
  DeliveryBoy.associate = function(models) {
    // associations can be defined here
    DeliveryBoy.belongsTo(models.Hub, {
      foreignKey: 'hubId',
      as: 'hub'
    });
  };
  return DeliveryBoy;
};