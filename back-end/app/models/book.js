const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const book = sequelize.define(
    'book',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      isbn: {
        type: DataTypes.STRING(13),
        allowNull: false,
        validate: {
          len: [13, 13],
          notEmpty: true,
        },
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      author: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      stock: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.VIRTUAL,
        get: function() {
          if (this.get('stock') > 0) {
            return 'موجود';
          }

          return 'ناموجود';
        },
      },
    },
    {
      timestamps: false,
    },
  );

  return book;
};