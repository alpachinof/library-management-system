const { DataTypes } = require('sequelize');
const moment = require('moment');

module.exports = (sequelize) => {
const loan = sequelize.define(
    'loan',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      issueDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      dueDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      returnDate: {
        type: DataTypes.DATEONLY,
      },
    },
    {
      timestamps: false,
    },
  );
  
  return loan;
};
