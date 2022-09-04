const { Sequelize , DataTypes } = require('sequelize');


const sequelize = new Sequelize('library', 'admin', 'admin', {
    dialect: 'mssql',
    host: 'localhost',
    port: '11402'
});

  async function test(){
      try{
          await sequelize.authenticate();
          console.log("connected");
      }
      catch(err){
          console.log(err);
      }
  }

  const modelDefiners = [
	require('./models/book'),
	require('./models/loan'),
	require('./models/user'),

];

for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

  function applyExtraSetup(sequelize) {
	const { book, loan, user } = sequelize.models;

	user.belongsToMany(book, { through: loan });
	book.belongsToMany(user, { through: loan });

}

async function sync(){
  await sequelize.sync({ force: true });
  console.log("All models were synchronized successfully.");
}

test();
applyExtraSetup(sequelize);

module.exports = sequelize;