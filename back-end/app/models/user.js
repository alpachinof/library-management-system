const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
const user = sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      memberId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING(80),
        allowNull: true,
      },
      lastName: {
        type: DataTypes.STRING(80),
        allowNull: true,
      },
      phoneNumber: {
        type: DataTypes.STRING(24),
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      joinDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      expireDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      }
    },
    {
      timestamps: false,
    },
  );

  return user;
};
